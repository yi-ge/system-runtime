describe('a component', function () {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
  }

  beforeEach(function () {
    runtime.system('component-spec');
    var metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'Person',
      '_inherit': ['_Component'],
      'firstName': 'property',
      'lastName': 'property',
      'address': 'property',
      'likes': 'property',
      'children': 'collection',
      'father': 'link',
      'moving': 'event'
    });

    metamodel.model({
      '_name': 'Person',
      '_inherit': ['_Component'],
      'children': {
        'type': ['Person'],
        'readOnly': false,
        'mandatory': false,
        'default': []
      },
      'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      },
      'lastName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      },
      'likes': {
        'type': 'array',
        'readOnly': false,
        'mandatory': false,
        'default': []
      },
      'father': {
        'type': 'Person',
        'readOnly': false,
        'mandatory': false,
        'default': {}
      },
      'address': {
        'type': 'string',
        'readOnly': false,
        'mandatory': false,
        'default': ''
      },
      'moving': {}
    });
    metamodel.create();

  });

  it('can show its id', function () {
    var id = runtime.id();
    expect(id).toBe('runtime');
  });

  it('can require a component', function () {
    var db = runtime.require('db');
    expect(db).toBeDefined();
  });

  it('can show its classInfo', function () {
    var db = runtime.require('db');
    var classInfo = db.classInfo();
    expect(classInfo).toBeDefined();
  });

  it('can add an event', function (done) {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master',
      'likes': ['teaching']
    });

    yoda.on('moving', function () {
      this.address('Dagobah');
    });
    yoda.moving();

    setTimeout(function () {
      expect(yoda.address()).toBe('Dagobah');
      done();
    }, 1);
  });

  it('can remove an event', function (done) {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    yoda.on('moving', function () {
      this.address('Dagobah');
    });
    yoda.off('moving');

    yoda.moving();

    setTimeout(function () {
      expect(yoda.address()).toBe('');
      done();
    }, 1);
  });

  it('can remove all event', function (done) {
    var Person = runtime.require('Person');
    var yoda2 = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    yoda2.on('moving', function () {
      this.address('Dagobah');
    });
    yoda2.off();

    yoda2.moving();

    setTimeout(function () {
      expect(yoda2.address()).toBe('');
      done();
    }, 1);
  });

  it('can remove an event with its id', function (done) {
    var Person = runtime.require('Person');
    var yoda3 = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    var behaviorId = yoda3.on('moving', function () {
      this.address('Dagobah');
    });

    yoda3.require(behaviorId).destroy();

    yoda3.moving();

    setTimeout(function () {
      expect(yoda3.address()).toBe('');
      done();
    }, 1);
  });

  it('can add an event on a property change', function (done) {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    })

    yoda.on('lastName', function (val) {
      this.address('Dagobah');
    });

    yoda.lastName('Grand Jedi Master');

    setTimeout(function () {
      expect(yoda.address()).toBe('Dagobah');
      done();
    }, 1);
  });

  it('can remove an event on a property change', function (done) {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    })

    yoda.on('lastName', function (val) {
      this.address('Dagobah');
    });

    yoda.off('lastName');

    yoda.lastName('Grand Jedi Master');

    setTimeout(function () {
      expect(yoda.address()).toBe('');
      done();
    }, 1);
  });

  it('can navigate threw relationships bewteen components', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children().push(luke);

    var leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);

    expect(leia.father().children(0).firstName()).toBe('Luke');
  });

  it('can get a property', function () {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    expect(yoda.firstName()).toBe('Yoda');
  });

  it('can set a property', function () {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    yoda.lastName('Grand Jedi Master');

    expect(yoda.lastName()).toBe('Grand Jedi Master');
  });

  it('can not set an invalid value', function () {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    yoda.lastName(42);

    expect(yoda.lastName()).toBe('Master');
  });

  it('can add a link to another components', function () {
    var Person = runtime.require('Person');

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    var leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);

    expect(leia.father().firstName()).toBe('Anakin');
  });

  it('can remove a link to another components', function () {
    var Person = runtime.require('Person');

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    var leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);
    leia.father(null);

    expect(leia.father()).toBe(undefined);
  });

  it('can add an item in a collection in the config', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker',
      'children': [luke]
    });

    expect(anakin.children(0).id()).toBe(luke.id());
  });

  it('can add an item in a collection with api', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children(0, luke);

    expect(anakin.children(0).id()).toBe(luke.id());
  });

  it('can add items in a collection with api', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children([luke, anakin]);

    expect(anakin.children().length).toBe(2);
  });

  it('can remove an item of a collection with pop', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker',
      'children': [luke]
    });

    expect(anakin.children().pop().id()).toBe(luke.id());
  });

  it('can remove an item of an array property with pop', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker',
      'likes': ['saying noooooo!']
    });

    luke.likes().pop();

    expect(luke.likes().length).toBe(0);
  });

  it('can add an item of a collection with push', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children().push(luke);

    expect(anakin.children(0).id()).toBe(luke.id());
  });

  it('can add an item of an array property with push', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    luke.likes().push('saying nooooooo!');

    expect(luke.likes().length).toBe(1);
  });

  it('can clear a collection with api', function () {
    var Person = runtime.require('Person');

    var luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    var anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children([luke, anakin]);
    anakin.children([]);

    expect(anakin.children().length).toBe(0);
  });

  it('can destroy itself', function () {
    var Person = runtime.require('Person');
    var yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    var id = yoda.id();
    yoda.destroy();

    expect(runtime.require(id)).toBe(undefined);
  });

  it('can destroy a class', function () {
    var Person = runtime.require('Person');
    Person.destroy();

    var result = runtime.require('Person');
    expect(result).toBe(undefined);
  });


  it('can create a core object', function () {
    var Person = runtime.require('Person');
    var shadow = new Person({
      'firstName': 'Shadow',
      'lastName': 'Object',
      '_core': true
    });

    expect(runtime.bundle().indexOf('Shadow')).toBe(-1);
  });

});