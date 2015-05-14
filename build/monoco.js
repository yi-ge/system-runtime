!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.monoco=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static
 */

'use strict';


/* Public properties */


/*
 * monoco core system
 * @property {MonocoSystem} system
 */
var system = {
    "name": "monoco",
    "version": "0.3.3",
    "description": "A Model and a NoSQL Database for Components",
    "_id": "e89c617b6b15d24",
    "schemas": {
        "Monoco": {
            "_id": "Monoco",
            "_name": "Monoco",
            "_schema": "MonocoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "find": {
                "params": [{
                    "name": "Class",
                    "type": "string"
                }, {
                    "name": "query",
                    "type": "object",
                    "mandatory": false,
                    "default": {}
                }],
                "result": "array"
            },
            "load": {
                "params": [{
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }]
            },
            "warning": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "system": {
                "params": [{
                    "name": "name",
                    "type": "string",
                    "mandatory": false
                }],
                "result": "object"
            },
            "ready": {}
        },
        "MonocoBehavior": {
            "_id": "MonocoBehavior",
            "_name": "MonocoBehavior",
            "_schema": "MonocoBehaviorSchema",
            "_core": true,
            "_class": false,
            "core": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "useCoreAPI": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "component": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "action": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "MonocoBehaviorSchema": {
            "_id": "MonocoBehaviorSchema",
            "_name": "MonocoBehaviorSchema",
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "MonocoChannel": {
            "_id": "MonocoChannel",
            "_name": "MonocoChannel",
            "_schema": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "listen": {
                "params": [{
                    "name": "event",
                    "type": "string"
                }, {
                    "name": "callback",
                    "type": "function"
                }]
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "message"
                }],
                "result": "boolean"
            }
        },
        "MonocoChannelSchema": {
            "_id": "MonocoChannelSchema",
            "_name": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "listen": "method",
            "send": "method"
        },
        "MonocoClassInfo": {
            "_id": "MonocoClassInfo",
            "_name": "MonocoClassInfo",
            "_schema": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "metamodel": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "model": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "property": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "properties": {
                "result": "array"
            },
            "method": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "methods": {
                "result": "array"
            },
            "event": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "events": {
                "result": "array"
            }
        },
        "MonocoClassInfoSchema": {
            "_id": "MonocoClassInfoSchema",
            "_name": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "event": "method",
            "events": "method"
        },
        "MonocoComponent": {
            "_id": "MonocoComponent",
            "_name": "MonocoComponent",
            "_schema": "MonocoComponentSchema",
            "_core": true,
            "on": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "handler",
                    "type": "function"
                }, {
                    "name": "useCoreAPI",
                    "type": "boolean",
                    "mandatory": false
                }]
            },
            "off": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "behaviorId",
                    "type": "string",
                    "mandatory": false
                }]
            },
            "require": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "destroy": {
                "params": []
            },
            "classInfo": {
                "type": "@MonocoClassInfo",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "init": {
                "params": [{
                    "name": "conf",
                    "type": "object"
                }]
            },
            "error": {
                "params": [{
                    "name": "data",
                    "type": "errorParam"
                }]
            }
        },
        "MonocoComponentSchema": {
            "_id": "MonocoComponentSchema",
            "_name": "MonocoComponentSchema",
            "_core": true,
            "on": "method",
            "classInfo": "property",
            "off": "method",
            "require": "method",
            "destroy": "event",
            "init": "event",
            "error": "event"
        },
        "MonocoDatabase": {
            "_id": "MonocoDatabase",
            "_name": "MonocoDatabase",
            "_schema": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "system": {
                "params": [{
                    "name": "system",
                    "type": "object",
                    "mandatory": false
                }],
                "result": "string"
            },
            "subsystem": {
                "params": [{
                    "name": "params",
                    "type": "object"
                }],
                "result": "string"
            },
            "insert": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "object"
                }]
            },
            "update": {
                "params": [{
                    "name": "schema",
                    "type": "string"
                }, {
                    "name": "componentId",
                    "type": "string"
                }, {
                    "name": "attributeName",
                    "type": "string"
                }, {
                    "name": "attributeValue",
                    "type": "object"
                }]
            },
            "remove": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "string"
                }]
            }
        },
        "MonocoDatabaseSchema": {
            "_id": "MonocoDatabaseSchema",
            "_name": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "MonocoMessage": {
            "_id": "MonocoMessage",
            "_name": "MonocoMessage",
            "_schema": "MonocoMessageSchema",
            "_core": true,
            "event": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "from": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "data": {
                "type": "object",
                "readOnly": false,
                "mandatory": true,
                "default": {}
            }
        },
        "MonocoMessageSchema": {
            "_id": "MonocoMessageSchema",
            "_name": "MonocoMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "MonocoMetamodel": {
            "_id": "MonocoMetamodel",
            "_name": "MonocoMetamodel",
            "_schema": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }]
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }]
            },
            "create": {
                "params": []
            }
        },
        "MonocoMetamodelSchema": {
            "_id": "MonocoMetamodelSchema",
            "_name": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "MonocoSchema": {
            "_id": "MonocoSchema",
            "_name": "MonocoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "find": "method",
            "load": "method",
            "system": "method",
            "warning": "event",
            "ready": "event"
        },
        "MonocoState": {
            "_id": "MonocoState",
            "_name": "MonocoState",
            "_schema": "MonocoStateSchema",
            "_class": false,
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "MonocoStateSchema": {
            "_id": "MonocoStateSchema",
            "_name": "MonocoStateSchema",
            "_core": true,
            "name": "property"
        },
        "MonocoSystem": {
            "_id": "MonocoSystem",
            "_name": "MonocoSystem",
            "_schema": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "master": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "subsystem": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "version": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "0.0.1"
            },
            "description": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "schemas": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "behaviors": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "types": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "components": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "ready": {},
            "sync": {},
            "main": {}
        },
        "MonocoSystemSchema": {
            "_id": "MonocoSystemSchema",
            "_name": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "ready": "event",
            "sync": "method",
            "main": "event"
        }
    },
    "types": {
        "collection": {
            "name": "collection",
            "type": "object",
            "schema": {
                "type": {
                    "type": [
                        "string"
                    ],
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "errorParam": {
            "name": "errorParam",
            "type": "object",
            "schema": {
                "message": {
                    "type": "string",
                    "mandatory": true
                },
                "error": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "event": {
            "name": "event",
            "type": "object",
            "schema": {
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "message": {
            "name": "message",
            "type": "object",
            "schema": {
                "event": {
                    "type": "string",
                    "mandatory": true
                },
                "from": {
                    "type": "string",
                    "mandatory": false
                },
                "data": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "method": {
            "name": "method",
            "type": "object",
            "schema": {
                "result": {
                    "type": "string",
                    "mandatory": false
                },
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "parameter": {
            "name": "parameter",
            "type": "object",
            "schema": {
                "name": {
                    "type": "string",
                    "mandatory": true
                },
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": false
                },
                "default": {
                    "type": "@type",
                    "mandatory": false
                }
            },
            "core": true
        },
        "property": {
            "name": "property",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                }
            },
            "core": true
        }
    },
    "behaviors": {
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "monoco",
            "state": "load",
            "action": "function load(url, async) { var xhr = null, callbackLoad = null; xhr = new XMLHttpRequest(); callbackLoad = function callbackLoad(system) { var sysId = $db.system(system); var sys = $component.get(sysId); if (sys) { sys.main(); } }; if (async) { xhr.open('GET', url, true); xhr.onreadystatechange = function () { if (xhr.readyState === 4) { if (xhr.status === 200) { callbackLoad(JSON.parse(xhr.response)); } } }; xhr.send(null); } else { xhr.open('GET', url, false); xhr.send(null); if (xhr.status === 200) { callbackLoad(JSON.parse(xhr.response)); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "monoco",
            "state": "ready",
            "action": "function ready() { var systems = [], system = null, i = 0, length = 0; if (typeof document !== 'undefined') { systems = document.querySelectorAll('link[rel=system]'); length = systems.length; for (i = 0; i < length; i++) { system = systems[i]; this.load(system.href, false); } } }",
            "core": true
        },
        "1a7e617a6b11034": {
            "_id": "1a7e617a6b11034",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) { console.error('monoco: ' + data.message, data.error); }",
            "core": true
        },
        "1589e1e3031a318": {
            "_id": "1589e1e3031a318",
            "component": "Monoco",
            "state": "find",
            "action": "function find(Class, query) { return $component.find(Class, query);}",
            "core": true,
            "useCoreAPI": true
        },
        "16f1a1ad921763e": {
            "_id": "16f1a1ad921763e",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) { var System = null, system = {}, result = [], conf = {}; if (name) { conf.master = true; conf.name = name; System = this.require('MonocoSystem'); system = new System(conf); } else { result = this.find('MonocoSystem', {'master': true}); if (result.length) { system = result[0]; } } return system; }",
            "core": true
        },
        "1c08718f9814c76": {
            "_id": "1c08718f9814c76",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) { console.warn('monoco: ' + message); }",
            "core": true
        },
        "18f141feae153b3": {
            "_id": "18f141feae153b3",
            "component": "MonocoChannel",
            "state": "listen",
            "action": "function listen(event, action) { $channel.listen(event, action); }",
            "core": true,
            "useCoreAPI": true
        },
        "121a4146ce19bc0": {
            "_id": "121a4146ce19bc0",
            "component": "MonocoChannel",
            "state": "send",
            "action": "function send(message) { return $channel.send(message); }",
            "core": true,
            "useCoreAPI": true
        },
        "1250c12fc012c8b": {
            "_id": "1250c12fc012c8b",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) { var result = {}; if (this.metamodel()[name] === 'event') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "18cd517f3712695": {
            "_id": "18cd517f3712695",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'event') { result.push(item); } } return result; }",
            "core": true
        },
        "12cf51307514d1c": {
            "_id": "12cf51307514d1c",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) { var result = {}; if (this.metamodel()[name] === 'method') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "181bf1291e18da2": {
            "_id": "181bf1291e18da2",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'method') { result.push(item); } } return result; }",
            "core": true
        },
        "1caa2134e71495d": {
            "_id": "1caa2134e71495d",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'property') { result.push(item); } } return result; }",
            "core": true
        },
        "18fd9144b01b321": {
            "_id": "18fd9144b01b321",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) { var result = {}; if (this.metamodel()[name] === 'property') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1406f196411d526": {
            "_id": "1406f196411d526",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() { $component.destroy(this.id()); }",
            "core": true,
            "useCoreAPI": true
        },
        "15e1112156195d2": {
            "_id": "15e1112156195d2",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) { var args = [], i = 0, length = 0; length = arguments.length; for (i = 0; i < length - 7; i++) { args.push(arguments[i]); } if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) { if ($metamodel.isValidState(state, this.constructor.name)) {$behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state}); } else { $helper.getMonoco().warning({ \"message\":\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"}); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "10ef314ab111665": {
            "_id": "10ef314ab111665",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) { return $component.get(id); }",
            "core": true,
            "useCoreAPI": true
        },
        "13adf12dbf1d009": {
            "_id": "13adf12dbf1d009",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) { return $db.subsystem(params); }",
            "core": true,
            "useCoreAPI": true
        },
        "1106a1020b1efc5": {
            "_id": "1106a1020b1efc5",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) { return $db.system(system); }",
            "core": true,
            "useCoreAPI": true
        },
        "11c9d104bf11ae7": {
            "_id": "11c9d104bf11ae7",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() { $metamodel.create(); }",
            "core": true,
            "useCoreAPI": true
        },
        "1202a172591a802": {
            "_id": "1202a172591a802",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) { $metamodel.schema(schema); }",
            "core": true,
            "useCoreAPI": true
        },
        "1243416a9212c81": {
            "_id": "1243416a9212c81",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) { $metamodel.type(type); }",
            "core": true,
            "useCoreAPI": true
        },
        "144ae1f0a91685e": {
            "_id": "144ae1f0a91685e",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() { var dump = $db.dump(); this.schemas(dump.schemas); this.types(dump.types); this.behaviors(dump.behaviors); this.components(dump.components); }",
            "core": true,
            "useCoreAPI": true
        },
        "1b8bf19ca4177cd": {
            "_id": "1b8bf19ca4177cd",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() { var monoco = $component.get('monoco'); monoco.ready(); }",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Monoco": {
            "monoco": {
                "_id": "monoco",
                "version": "0.3.3"
            }
        },
        "MonocoChannel": {
            "channel": {
                "_id": "channel"
            }
        },
        "MonocoDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "MonocoMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        }
    }
};

/* exports  */


/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static
 */


/**
 * monoco core system
 * @property {MonocoSystem} system
 */
exports.system = system;

},{}],2:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module manages the behaviors of all components. 
 * A behavior is a mecanism that allow users to add actions that will be executed 
 * when a specific state of a component will change.
 * 
 * @module monoco
 * @submodule monoco-behavior
 * @requires monoco-db
 * @requires monoco-helper
 * @requires monoco-channel
 * @class monoco-behavior
 * @static
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');
var $channel = require('./channel.js');


/* Private properties */


var store = {};


/* Private methods */


/*
 * Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters.
 * @method createFunction
 * @param {String} name default name of the function 
 * @param {String} func a stringified function
 * @param {Boolean} core if true, the behavior will be treated as a monoco core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the function (default false)
 * @return {Function} the created function
 * @private
 */
function createFunction(name, func, core, useCoreAPI) {
    var funcName = '',
    beginBody = -1,
    funcParams = '',
    params = [],
    paramsClean = [],
    funcBody = '',
    header = '',
    action = null;

    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);

    funcName = header.split('(')[0].replace('function', '').trim();
    funcParams = header.split('(')[1].replace(')', '').trim();

    params = funcParams.split(',');
    params.forEach(function (param) {
        paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 1);
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim();

    funcName = funcName || name;

    // for accessing monoco core APIs
    if (useCoreAPI) {
        if (params[0] === '') {
            params = [];
        }
        params.push('$component');
        params.push('$db');
        params.push('$metamodel');
        params.push('$workflow');
        params.push('$behavior');
        params.push('$log');
        params.push('$channel');
    }

    if (params[0] !== '') {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " (" + params.join(',') + ") { return new Function('" + params.join("','") + "', body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    } else {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " () { return new Function(body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    }

    return action;
}


/* Public methods */


/*
 * Add a behavior that will be stored in monoco database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in monoco database
 */
function add(id, state, action, useCoreAPI, core) {
    var behaviorId = $helper.generateId();

    if (typeof useCoreAPI === 'undefined') {
        useCoreAPI = false;
    }

    if (typeof core === 'undefined') {
        core = false;
    }

    store[behaviorId] = action;

    $db.MonocoBehavior.insert({
        "_id": behaviorId,
        "component": id,
        "state": state,
        "action": action.toString(),
        "useCoreAPI": useCoreAPI,
        "core": core
    });

    return behaviorId;
}


/*
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
function remove(params) {
    params = params || {};
    params.behaviorId = params.behaviorId || '';
    params.componentId = params.componentId || '';
    params.state = params.state || '';

    if (params.componentId) {
        if (params.behaviorId) {
            $db.MonocoBehavior.remove({
                "_id": params.behaviorId,
                "component": params.componentId,
                "state": params.state
            });
        } else {
            $db.MonocoBehavior.remove({
                "component": params.componentId,
                "state": params.state
            });
        }
    }
}


/*
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
function getActions(id, state) {
    var result = [],
    dbResult = [],
    action = null;

    dbResult = $db.MonocoBehavior.find({
        "component": id,
        "state": state
    });

    dbResult.forEach(function (behavior) {
        action = store[behavior._id];
        if (typeof action === 'undefined') {
            action = createFunction(behavior.state, behavior.action, behavior.core, behavior.useCoreAPI);
            store[behavior._id] = action;
        }
        result.push({
            "core": behavior.core,
            "action": action
        });
    });

    return result;
}


/*
 * Remove all the behaviors stored in memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the behaviors of all components. A behavior is a mecanism that allow users to add action that will be executed 
 * when a specific state of a component will change.
 * 
 * @module monoco
 * @submodule monoco-behavior
 * @requires monoco-db
 * @requires monoco-helper
 * @requires monoco-channel
 * @class monoco-behavior
 * @static
 */


/**
 * Add a behavior that will be stored in monoco database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in monoco database
 */
exports.add = add;


/**
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
exports.remove = remove;


/**
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
exports.getActions = getActions;


/**
 * Remove all the behaviors stored in memory.
 * @method clear
 */
exports.clear = clear;
},{"./channel.js":3,"./db.js":5,"./helper.js":6}],3:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * This module manages the channel.
 * 
 * @module monoco
 * @submodule monoco-channel
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-log
 * @requires monoco-helper
 * @class monoco-channel
 * @static
 */

'use strict';

var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $log = require('./log.js');
var $helper = require('./helper.js');


/* Public methods */

/*
 * Listen to an event.
 * @method listen
 * @param {String} event name of the event
 * @param {Function} action code to execute
 */
function listen(event, action) {
    $behavior.add('channel', event, action, true);
}


/*
 * Send a message into the channel.
 * @method send
 * @param {type} message
 * @returns {Boolean} true if the message was sent
 */
function send(message) {
    var messages = [],
    result = true,
    systemId = '',
    systems = [];

    if ($helper.isMonoco()) {
        systems = $helper.getMonoco().find('MonocoSystem', {'master': true});
        if (systems.length) {
            systemId = systems[0].id();
        }
    }

    message.from = systemId;

    messages = $db.MonocoMessage.insert(message);

    if (!messages.length) {
        result = false;
    }
    return result;
}


/* exports */


/**
 * This module manages the channel.
 * 
 * @module monoco
 * @submodule monoco-channel
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-log
 * @requires monoco-helper
 * @class monoco-channel
 * @static
 */


/**
 * Listen to an event.
 * @method listen
 * @param {String} event name of the event
 * @param {Function} action code to execute
 */
exports.listen = listen;


/**
 * Send a message into the channel.
 * @method send
 * @param {type} message
 * @returns {Boolean} true if the message was sent
 */
exports.send = send;
},{"./behavior.js":2,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8}],4:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module manages the components. 
 * It is the factory of all the components that are created by monoco.
 * 
 * @module monoco
 * @submodule monoco-component
 * @requires monoco-workflow
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-component
 * @static 
 */

'use strict';

var $workflow = require('./workflow.js');
var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $helper = require('./helper.js');
var $log = require('./log.js');


/* Private properties */


var PROPERTY_TYPE = 'property',
COLLECTION_TYPE = 'collection',
METHOD_TYPE = 'method',
EVENT_TYPE = 'event',
store = {};


/* Private methods */


/*
 * Sub class to override push and pop method of Array Class.
 * @class monocoArray
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 */
function monocoArray(conf) {
    var arr = [],
    arrDb = [],
    classId = '',
    type = '';

    conf = conf || {};
    classId = conf.classId || '';
    type = conf.type || '';
    arrDb = conf.arr || [];

    arrDb.forEach(function (val) {
        if (type.indexOf('@') !== -1) {
            arr.push(monoco.require(val));
        } else {
            arr.push(val);
        }
    });

    arr.push = function (val) {
        if (val && (val.constructor.name === classId || $metamodel.chekSchema(val, classId))) {
            this[this.length] = val;
            arrDb.push(val.id());
        }
    };

    arr.pop = function () {
        var result = null;
        arrDb.pop();
        if (this.length !== 0) {
            result = this.splice(this.length - 1, 1);
        } else {
            result = this;
        }
        return result;
    };

    /* jshint -W103 */
    arr.__proto__ = monocoArray.prototype;
    /* jshint +W103 */
    return arr;
}

/* jshint -W058 */
monocoArray.prototype = new Array;
/* jshint +W058 */


/*
 * Get all the names of method parameters.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} all the names of method parameters of the class
 * @private
 */
function getParamNames(id, methodName) {
    var params = [],
    result = [],
    length = 0,
    i = 0;

    params = $metamodel.get(id)[methodName].params;
    if (params) {
        length = params.length;
        for (i = 0; i < length; i++) {
            result.push(params[i].name);
        }
    }
    return result;
}


/*
 * Get all the property of a class.
 * @method getProperties
 * @param {String} id id of the class
 * @return {Array} all the properties of the class
 * @private
 */
function getProperties(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === PROPERTY_TYPE || schema[propNames[i]] === COLLECTION_TYPE) {
            result.push({
                "name": propNames[i],
                "type": model[propNames[i]].type,
                "readOnly": model[propNames[i]].readOnly
            });
        }
    }

    return result;
}


/*
 * Get all the method of a class.
 * @method getMethods
 * @param {String} id id of the class
 * @return {Array} all the methods of the class
 * @private
 */
function getMethods(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === METHOD_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}


/*
 * Get all the event of a class.
 * @method getEvents
 * @param {String} id id of the class
 * @return {Array} all the events of the class
 * @private
 */
function getEvents(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === EVENT_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}


/*
 * Create a new class from a class definition.
 * @method createClasss
 * @param {String} classId name of the class
 * @return {Function} the class
 * @private
 */
function createClass(classId) {
    var body = function (config) {
        config = config || {};
        var body = {};

        if ($metamodel.isValidObject(config, $metamodel.get(classId), true, true)) {
            $metamodel.prepareObject(config, $metamodel.get(classId));
        } else {
            $workflow.stop({
                "error": true,
                "message": "the parameters for creating a component of class '" + classId + "' are not compliant with the model"
            });
        }

        if (typeof config._id === 'undefined') {
            config._id = $helper.generateId();
        }
        store[config._id] = this;

        // id
        body = function () {
            return config._id;
        };
        /* jshint -W054 */
        this.id = new Function("body", "return function id () { return body.call(this) };")(body);
        /* jshint +W054 */

        // classInfo
        config.classInfo = classId + 'Info';

        // create link to db
        $db.store[classId][config._id] = config;

        if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
            $helper.getMonoco().require('db').insert(classId, config);
        }

        Object.freeze(this);

        if (this.init) {
            this.init(config);
        }
    };
    /* jshint -W054 */
    return new Function("body", "return function " + classId + " (config) { body.call(this,config) };")(body);
    /* jshint +W054 */
}


/*
 * Add an id method to a class that will return its id.
 * @method addId
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 */
function addId(Class, classId) {
    var body = function () {
        return classId;
    };
    /* jshint -W054 */
    Class.id = new Function("body", "return function id (prop, val) { return body.call(this, prop, val) };")(body);
    /* jshint +W054 */
}


/*
 * Add properties to a component. All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 * @example
 * laure.age(); // get the age of a person
 * laure.age(22); // set the age of a person
 * @method addProperties
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addProperties(model, Class, classId) {
    var properties = getProperties(model);

    properties.forEach(function property(prop) {
        var body = {},
        propertyName = '',
        propertyType = '',
        propertyReadOnly = '';

        propertyName = prop.name;
        propertyType = prop.type;
        propertyReadOnly = prop.readOnly;

        if (Array.isArray(propertyType)) { // in case of array, return a sub array
            body = function body(position, value) {
                var search = [],
                component = null,
                monocoArr = null,
                val = null;

                if (typeof value === 'undefined') {
                    if (typeof position === 'undefined') {

                        monocoArr = new monocoArray({
                            "classId": classId,
                            "type": propertyType[0],
                            "arr": $db.store[classId][this.id()][propertyName]
                        });

                        return monocoArr;
                    } else {
                        val = $db.store[classId][this.id()][propertyName][position];
                        if (val) {
                            return monoco.require(val);
                        }
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({"_id": this.id()});
                            if (search.length) {
                                component = search[0];
                                component[propertyName][0] = value.id();

                                if ($helper.isMonoco()) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, value.id());
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": arguments
                                });
                            } else {
                                $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                            }
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (position, value) { return body.call(this, position, value) };")(body);
            /* jshint +W054 */
        } else {
            body = function body(value) {
                var search = [],
                component = null,
                propertyValue = null;

                if (typeof value === 'undefined') {
                    component = $db.store[classId][this.id()];
                    if (component) {
                        propertyValue = component[propertyName];

                        if (propertyType.indexOf('@') !== -1) {
                            propertyValue = get(propertyValue);
                        }
                        return propertyValue;
                    } else {
                        $workflow.stop({
                            "error": true,
                            "message": "trying to get the property '" + propertyName + "' on the destroyed component '" + this.id() + "'"
                        });
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({"_id": this.id()});
                            if (search.length) {
                                component = search[0];

                                if (propertyType.indexOf('@') !== -1) {
                                    component[propertyName] = value.id();
                                } else {
                                    component[propertyName] = value;
                                }

                                if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, value);
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": arguments
                                });
                            }
                        } else {
                            $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (value) { return body.call(this,value) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 * @method addMethods
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addMethods(model, Class, classId) {
    var methods = getMethods(model);

    methods.forEach(function method(methodName) {
        var paramsName = getParamNames(classId, methodName),
        params = paramsName.join(','),
        body = function () {
            var result = null;

            result = $workflow.state({
                "component": this.id(),
                "state": methodName,
                "data": arguments
            });

            return result;
        };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add events to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts are compliant with the model.
 * @method addEvents
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addEvents(model, Class, classId) {
    var events = getEvents(model);
    events.forEach(function event(methodName) {
        var paramsName = getParamNames(classId, methodName),
        params = paramsName.join(','),
        body = function () {
            $workflow.state({
                "component": this.id(),
                "state": methodName,
                "data": arguments
            });
        };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add a on method to a component to add behaviors to the component.
 * @method addOn
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOn(Class, classId) {
    var body = function (state, handler, useCoreAPI) {
        var result = '';
        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                !$metamodel.isEvent(state, classId) &&
                $db.MonocoBehavior.find({
                    "component": this.id(),
                    "state": state}).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    result = $behavior.add(this.id(), state, handler, useCoreAPI);
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return result;
    };
    /* jshint -W054 */
    Class.prototype.on = new Function("body", "return function on (state,handler,useCoreAPI) { return body.call(this,state,handler,useCoreAPI) };")(body);
    /* jshint +W054 */
}


/*
 * Add a on method to a class component to add behaviors to the class.
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOnClass(Class, classId) {
    var body = function (state, handler, useCoreAPI) {
        var result = '';
        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                !$metamodel.isEvent(state, classId) &&
                $db.MonocoBehavior.find({
                    "component": this.id(),
                    "state": state}).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    result = $behavior.add(this.id(), state, handler, useCoreAPI);
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return result;
    };
    /* jshint -W054 */
    Class.on = new Function("body", "return function on (state,handler,useCoreAPI) { return body.call(this, state, handler, useCoreAPI) };")(body);
    /* jshint -W054 */
}


/*
 * Add a off method to a class component to remove behaviors from the class.
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOffClass(Class, classId) {
    var body = function (state, behaviorId) {
        if ($workflow.checkParams({
            "component": this,
            "methodName": "off",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                $behavior.remove({
                    "behaviorId": behaviorId,
                    "componentId": classId,
                    "state": state
                });
            } else {
                $log.InvalidStateOff(classId, state);
            }
        }
    };
    /* jshint -W054 */
    Class.off = new Function("body", "return function off (state, behaviorId) { return body.call(this, state, behaviorId) };")(body);
    /* jshint +W054 */
}


/*
 * Add a destroy method to a class component to detroy the class and all the components of the same class.
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 */
function addDestroyClass(Class) {
    var body = function () {
        var id = this.id();
        // if not virtual component
        if ($db[id]) {
            $db[id].remove();
        }

        delete store[id];

        $workflow.state({
            "component": id,
            "state": "destroy"
        });
    };
    /* jshint -W054 */
    Class.destroy = new Function("body", "return function destroy () { return body.call(this) };")(body);
    /* jshint +W054 */
}



/*
 * Add the addClassInfo method on a class.
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 */
function addClassInfoClass(Class) {
    var body = function () {
        return get(this.id() + 'Info');
    };
    /* jshint -W054 */
    Class.classInfo = new Function("body", "return function classInfo () { return body.call(this) };")(body);
    /* jshint +W054 */
}


/*
 * Create a component from its configuration.
 * @method factory
 * @param {JSON} config configuration of the component
 * @return {Component} the created component
 * @private
 */
function factory(config) {
    config = config || {};

    var Class = {},
    classId = '';

    if (typeof config.model === 'undefined') {
        classId = $helper.generateId();
    } else {
        classId = config.model;
    }

    Class = createClass(classId);

    store[classId] = Class;

    addId(Class, classId);

    addProperties(config.model, Class, classId);
    addMethods(config.model, Class, classId);
    addEvents(config.model, Class, classId);

    // add default properties/methods only if the component
    // inherit from MonocoComponent
    if ($metamodel.inheritFrom(classId, 'MonocoComponent')) {
        addOn(Class, classId);
        addOnClass(Class, classId);
        addOffClass(Class, classId);
        addDestroyClass(Class);
        addClassInfoClass(Class);
    }

    Object.freeze(Class);

    return Class;
}


/* Public methods */


/*
 * Get a component by its id.
 * @method get
 * @param {String} id
 * @return {Component}
 */
function get(id) {
    return store[id];
}


/*
 * Find  components with a query.
 * @method find
 * @param {String} query query
 * @return {Array} components found
 */
function find(Class, query) {
    var documents = [],
    components = [],
    component = null,
    i = 0,
    length = 0;

    if ($db[Class]) {
        documents = $db[Class].find(query);
        length = documents.length;
        for (i = 0; i < length; i++) {
            component = exports.get(documents[i]._id);
            if (component) {
                components.push(component);
            }
        }
    }
    return components;
}


/*
 * Create a component from its configuration.
 * @method create
 * @param {Object} config
 * @return {Component}
 */
function create(config) {
    return factory(config);
}

/*
 * Check if the component has for class name className.
 * @method isInstanceOf
 * @param {type} component component
 * @param {type} className name of the class
 * @return {Boolean} true if the component has for class name className  
 */
function isInstanceOf(component, className) {
    var result = false,
    componentClassName = '';

    componentClassName = component.constructor.name;

    if (componentClassName === 'Function') {
        componentClassName = component.name;
    }
    result = component === className;

    return result;
}


/*
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 */
function destroy(id) {
    var component = store[id],
    classId = '';

    if (component) {
        delete store[id];
        classId = component.constructor.name;
        $db[classId].remove({
            "_id": id
        });
    }
}



/*
 * Remove all the components store in the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the components. 
 * It is the factory of all the components that are created by monoco.
 * 
 * @module monoco
 * @submodule monoco-component
 * @requires monoco-workflow
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-component
 * @static 
 */


/**
 * Create a component from its configuration.
 * @method create
 * @param {Object} config
 * @return {Component}
 */
exports.create = create;


/**
 * Get a component by its id.
 * @method get
 * @param {String} id
 * @return {Component}
 */
exports.get = get;


/**
 * Find components with a query.
 * @method find
 * @param {String} query query
 * @return {Array} components found
 */
exports.find = find;


/**
 * Check if the component has for class name className.
 * @method isInstanceOf
 * @param {type} component component
 * @param {type} className name of the class
 * @return {Boolean} true if the component has for class name className  
 */
exports.isInstanceOf = isInstanceOf;


/**
 * Remove all the components store in memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 * @return {Boolean} if the component has been destroyed
 */
exports.destroy = destroy;
},{"./behavior.js":2,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8,"./workflow.js":11}],5:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module manages monoco database. <br>
 * monoco database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * monoco Database is closely linked to monoco metamodel and monoco components because: <br>
 * - all operations done by monoco database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *  
 * @module monoco
 * @submodule monoco-db
 * @requires monoco-component
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-db
 * @static
 */

'use strict';

var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $helper = require('./helper.js');
var $log = require('./log.js');


/* Private properties */


var store = {},
collections = [],
internalDB = [
    'Monoco',
    'MonocoSchema',
    'MonocoExtendedSchema',
    'MonocoBehavior',
    'MonocoState',
    'MonocoType',
    'MonocoMetamodel',
    'MonocoDatabase',
    'MonocoSystem',
    'MonocoClassInfo',
    'MonocoMessage',
    'MonocoChannel'
];


/* Private methods */


/*
 * Test if an object contains another one.
 * @method contains
 * @param {Object} source source object 
 * @param {Object} target otarget bject 
 * @return {Boolean} true if the source object contains the target object
 * @private
 */
function contains(source, target) {
    var result = true,
    property = {};

    for (property in source) {
        if (typeof target[property] === 'undefined' || target[property] !== source[property]) {
            result = false;
            break;
        }
    }
    return result;
}


/** 
 * A collection of documents managed by monoco. <br>
 * Internal collections manage core objects of monoco (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class MonocoDatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var MonocoDatabaseCollection = function (name) {
    if ($metamodel.get(name) || internalDB.indexOf(name) !== -1) {
        store[name] = {};
        this.name = name;
        if (internalDB.indexOf(name) === -1) {
            collections.push(name);
        }
    } else {
        $log.invalidCollectionName(name);
    }
};


/**
 * Find a document into the collection.
 * @method find
 * @param {Object|Array} query
 * @return {Array} Array of documents that map the query
 * 
 * @example 
 * $db.Person.find({"name": "laure"}); <br>
 * $db.Person.find({"name": "laure", "age" : 24}); <br>
 * $db.Person.find([{"name": "rene"}, {"name": "robert"}]);
 */
MonocoDatabaseCollection.prototype.find = function (query) {
    var result = [],
    id = '',
    object = {};

    query = query || null;

    if (query && Object.keys(query).length) {
        if (Array.isArray(query)) {
            query.forEach(function multi_search(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];
                    if (contains(criteria, object)) {
                        result.push(object);
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];
                if (contains(query, object)) {
                    result.push(object);
                }
            }
        }
    } else {
        for (id in store[this.name]) {
            object = store[this.name][id];
            result.push(object);
        }
    }

    return result;
};


/**
 * Insert an new document into the collection. <br>
 * Before inserting the document, monoco checks that the document is compliant
 * with its class definition. <br> 
 * Then, after inserting it, we create the component.
 * @method insert
 * @param {Object|Array} document a new object to add
 * @return {Array} array of id created
 * 
 * @example 
 * $db.Person.insert({<br>
 *      "name": "bob", <br>
 *      "firstName": "Saint-Clar", <br>
 *      "age": 43 <br>
 * }); <br>
 */
MonocoDatabaseCollection.prototype.insert = function (document) {
    var doc = [],
    Component = null,
    result = [];

    if (Array.isArray(document)) {
        doc = document;
    } else {
        doc.push(document);
    }

    doc.forEach(function multi_insert(obj) {
        var component = null;
        if (this.name === 'MonocoSchema' || this.name === 'MonocoType' || this.name === 'MonocoExtendedSchema' || $metamodel.isValidObject(obj, $metamodel.get(this.name))) {
            if (typeof obj._id === 'undefined') {
                obj._id = $helper.generateId();
            }

            store[this.name][obj._id] = obj;
            Component = $component.get(this.name);
            if (Component) {
                component = new Component(obj);
                result.push(component.id());
            } else {
                if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                    $helper.getMonoco().require('db').insert(this.name, obj);
                }
            }
            
            if (this.name === 'MonocoMessage') {
                if ($helper.isMonoco() && $helper.getMonoco().require('channel')) {
                    $helper.getMonoco().require('channel')[obj.event](obj.data);
                }
            }
            
        } else {
            $log.invalidDocumentOnDbInsert(obj, this.name);
        }
    }.bind(this));

    return result;
};


/**
 * Update documents into a collection.
 * @method update
 * @param {Object|Array} query query to find the documents to update
 * @param {Object} update update to make
 * @param {Object} options 
 * {Boolean} upsert true if we create a document when no document is found by the query
 * @return {Number} Number of documents updated
 * 
 * @example 
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}); <br>
 * $db.Cars.update([{"code": "AZD-71"}, {"code": "AZD-65"}], {"price": "10000$"}); <br>
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}, {"upsert": true}); <br>
 */
MonocoDatabaseCollection.prototype.update = function (query, update, options) {
    var docs = this.find(query),
    updated = 0,
    i = 0,
    length = docs.length,
    attributeName = '',
    schema = $metamodel.get(this.name);

    options = options || {};
    if (typeof options.upsert === 'undefined') {
        options.upsert = options.upsert || false;
    }

    if (update) {

        // upsert case
        if (length === 0 && options.upsert) {
            if (query._id) {
                update._id = query._id;
            }
            this.insert(update);
            updated = updated + 1;
        }

        for (i = 0; i < length; i++) {
            for (attributeName in update) {
                if (typeof docs[i][attributeName] !== 'undefined') {
                    if (schema[attributeName] && schema[attributeName].type && $metamodel.isValidType(update[attributeName], schema[attributeName].type)) {
                        docs[i][attributeName] = update[attributeName];
                        updated = updated + 1;
                        if ($helper.isMonoco()) {
                            $helper.getMonoco().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                        }
                    } else {
                        $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName]);
                    }
                }
            }
        }
    }

    return updated;
};


/**
 * Remove a document from the colllection. <br>
 * When a document is removed, the component is destroyed.
 * @method remove
 * @param {Object|Array} query query to find the documents to remove
 * @return {Number} number of documents removed
 * 
 * @example 
 * $db.Cars.remove({"code": "AZD-71"}); <br>
 * $db.Cars.remove([{"code": "AZD-71"}, {"code": "AZD-65"}]); <br>
 */
MonocoDatabaseCollection.prototype.remove = function (query) {
    var result = 0,
    id = '',
    component = null,
    object = {};

    query = query || null;

    if (query && Object.keys(query).length) {

        if (Array.isArray(query)) {
            query.forEach(function multi_remove(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];

                    if (contains(criteria, object)) {
                        delete store[this.name][id];
                        component = $component.get(id);
                        if (component) {
                            component.destroy();
                        }
                        if ($helper.isMonoco()) {
                            $helper.getMonoco().require('db').remove(this.name, id);
                        }
                        result++;
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];

                if (contains(query, object)) {
                    delete store[this.name][id];
                    component = $component.get(id);
                    if (component) {
                        component.destroy();
                    }
                    if ($helper.isMonoco()) {
                        $helper.getMonoco().require('db').remove(this.name, id);
                    }
                    result++;
                }
            }
        }
    } else {
        for (id in store[this.name]) {
            delete store[this.name][id];
            component = $component.get(id);
            if (component) {
                component.destroy();
            }
            if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                $helper.getMonoco().require('db').remove(this.name, id);
            }
            result++;
        }
    }

    return result;
};


/**
 * Count the number of documents in the collection.
 * @method count
 * @return {Number} number of documents in the collection
 */
MonocoDatabaseCollection.prototype.count = function () {
    var result = 0,
    objectId = '';
    for (objectId in store[this.name]) {
        result++;
    }
    return result;
};


/* Public methods */


/*
 * Create a new {{#crossLink "MonocoDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
function collection(name) {
    exports[name] = new MonocoDatabaseCollection(name);
}


/*
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 */
function dump() {
    var dbDump = {},
    collectionName = '',
    behaviorId = '',
    typeId = '',
    type = null,
    behavior = null,
    schema = null,
    schemaId = '',
    length = 0,
    i = 0;

    // schemas
    dbDump.schemas = {};
    if (exports.MonocoSchema.count()) {
        for (schemaId in store.MonocoSchema) {
            schema = store.MonocoSchema[schemaId];
            if (!schema._core) {
                dbDump.schemas[schemaId] = schema;
            }
        }
    }

    // types
    dbDump.types = {};
    if (exports.MonocoType.count()) {
        for (typeId in store.MonocoType) {
            type = JSON.parse(JSON.stringify(store.MonocoType[typeId]));
            delete type._id;
            if (!type.core) {
                dbDump.types[type.name] = type;
            }
        }
    }

    // behaviors
    dbDump.behaviors = {};
    for (behaviorId in store.MonocoBehavior) {
        behavior = JSON.parse(JSON.stringify(store.MonocoBehavior[behaviorId]));
        if (!behavior.core) {
            dbDump.behaviors[behaviorId] = behavior;
        }
    }

    // components
    dbDump.components = {};
    length = collections.length;
    for (i = 0; i < length; i++) {
        collectionName = collections[i];
        if (exports[collectionName].count()) {
            dbDump.components[collectionName] = store[collectionName];
        }
    }

    return dbDump;
}


/*
 * Import/Export a monoco system into/from the database
 * @method system
 * @param {JSON} importedSystem a monoco system to import
 * @return {String} the id of the imported monoco system or the if of the current monoco system  
 */
function system(importedSystem) {
    var result = '',
    collectionName = '',
    componentId = '',
    typeName = '',
    schemaName = '',
    behaviorId = '',
    systems = [],
    id = null,
    mastersystem = null,
    behavior = null,
    exportedSystem = {};

    if (importedSystem) { // import

        // add types
        for (typeName in importedSystem.types) {
            $metamodel.type(importedSystem.types[typeName]);
        }

        // add schemas
        for (schemaName in importedSystem.schemas) {
            $metamodel.schema(importedSystem.schemas[schemaName]);
        }

        $metamodel.create();

        //add behaviors
        for (behaviorId in importedSystem.behaviors) {
            exports.MonocoBehavior.insert(importedSystem.behaviors[behaviorId]);
        }

        // add components
        for (collectionName in importedSystem.components) {
            for (componentId in importedSystem.components[collectionName]) {
                exports[collectionName].insert(importedSystem.components[collectionName][componentId]);
            }
        }

        // reset info if already a master system
        systems = exports.MonocoSystem.find({'master': true});
        if (systems.length && systems[0]._id === importedSystem._id) {
            importedSystem.master = true;
        } else {
            importedSystem.master = false;
        }

        // insert the system in DB
        exports.MonocoSystem.insert(importedSystem);

        result = importedSystem._id;

    } else { // export
        exportedSystem = dump();

        // get id of the master system
        systems = exports.MonocoSystem.find({'master': true});

        if (systems.length) {
            mastersystem = systems[0];
            id = mastersystem._id;
            for (behaviorId in exportedSystem.behaviors) {
                behavior = exportedSystem.behaviors[behaviorId];
                if (behavior.state === 'main') {
                    behavior.component = id;
                }
            }

            exportedSystem.name = mastersystem.name;
            exportedSystem.version = mastersystem.version;
            exportedSystem.description = mastersystem.description;
            exportedSystem._id = id;

            result = JSON.stringify(exportedSystem);
        } else {
            $log.masterSystemNotFound();
        }
    }
    return result;
}


/*
 * Export a monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified monoco sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
function subsystem(params) {
    var system = {},
    result = [],
    defaultName = '',
    i = 0,
    length = 0,
    schema = null,
    type = null,
    behavior = null,
    component = null,
    className = '';

    // default values
    result = monoco.find('MonocoSystem', {
        'master': true
    });
    if (result.length) {
        defaultName = result[0].name();
    }

    system.name = params.name || 'sub_' + defaultName;
    system.version = params.version || '0.0.1';
    system.description = params.description || '';

    system.subsystem = true;

    // schemas
    system.schemas = {};
    if (params.schemas) {
        result = exports.MonocoSchema.find(params.schema);

        length = result.length;
        for (i = 0; i < length; i++) {
            schema = result[i];
            if (!schema._core) {
                system.schemas[schema._id] = schema;
            }
        }
    }

    // types
    system.types = {};
    if (params.types) {
        result = exports.MonocoType.find(params.types);

        length = result.length;
        for (i = 0; i < length; i++) {
            type = result[i];
            if (!type._core) {
                system.types[type._id] = type;
            }
        }
    }

    // behaviors
    system.behaviors = {};
    if (params.behaviors) {
        behavior = exports.MonocoBehavior.find(params.behaviors);

        length = result.length;
        for (i = 0; i < length; i++) {
            behavior = result[i];
            if (!behavior.core) {
                system.behaviors[behavior._id] = behavior;
            }
        }
    }

    // components
    system.components = {};
    if (params.components) {
        for (className in params.components) {
            if (exports[className]) {
                system.components[className] = {};

                result = exports[className].find(params.components[className]);
                length = result.length;
                for (i = 0; i < length; i++) {
                    component = result[i];
                    system.components[className][component._id] = component;
                }
            }
        }
    }

    return JSON.stringify(system);
}


/* exports */


/**
 * This module manages monoco database. <br>
 * monoco database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * monoco database is closely linked to monoco metamodel because: <br>
 * - all operations done by monoco database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *   
 * @module monoco
 * @submodule monoco-db
 * @requires monoco-component
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-db
 * @static
 */


/**
 * Create a new {{#crossLink "MonocoDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
exports.collection = collection;


/**
 * monoco database store that list all the collections.
 * @property {JSON} store
 */
exports.store = store;


/**
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 */
exports.dump = dump;


/**
 * Import/Export a monoco system into/from the database.
 * @method system
 * @param {JSON} importedSystem a monoco system to import
 * @return {String} the id of the imported monoco system or the current monoco system  
 */
exports.system = system;


/**
 * Export a monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified monoco sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
exports.subsystem = subsystem;
},{"./component.js":4,"./helper.js":6,"./log.js":7,"./metamodel.js":8}],6:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module contains all the functions used by all the modules.
 * 
 * @module monoco
 * @submodule monoco-helper
 * @requires monoco-db
 * @requires monoco-component
 * @class monoco-helper
 * @static
 */


'use strict';

var $db = require('./db.js');
var $component = require('./component.js');


/* Private property */

var monocoRef = null;


/* Public method */


/*
 * Check if a monoco instance exists.
 * @method isMonoco
 * @return {Boolean} true if a monoco instance exist
 */
function isMonoco() {
    var result = false;

    if ($db.Monoco && $db.Monoco.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the monoco instance.
 * @method getMonoco
 * @return {Monoco} monoco instance
 */
function getMonoco() {
    var monocoId = '';

    if (!monocoRef) {
        if (isMonoco()) {
            monocoId = $db.Monoco.find()[0]._id;
            monocoRef = $component.get(monocoId);
        } else {
            monocoRef = {
                error: function error(err, data) {
                    console.error('monoco: ' + err, data);
                },
                warning: function warning(message) {
                    console.warn('monoco: ' + message);
                }
            };
        }
    }

    return monocoRef;
}


/*
 * Generate a uid.
 * @method generateId
 * @return {String} a uid
 */
function generateId() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }
    return gen() + gen() + gen();
}


/* exports */


/**
 * This module contains all the functions used by all the modules.
 * 
 * @module monoco
 * @submodule monoco-helper
 * @requires monoco-db
 * @requires monoco-component
 * @class monoco-helper
 * @static
 */


/**
 * Get monoco instance.
 * @method getMonoco
 * @return {Monoco} monoco instance
 */
exports.getMonoco = getMonoco;


/**
 * Check if a monoco instance exists.
 * @method isMonoco
 * @return {Boolean} true if a monoco instance exist
 */
exports.isMonoco = isMonoco;


/**
 * Generate a uid?
 * @method generateId
 * @return {String} a uid
 */
exports.generateId = generateId;
},{"./component.js":4,"./db.js":5}],7:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module contains all the functions that write a log.
 * 
 * @module monoco
 * @submodule monoco-log
 * @requires monoco-helper
 * @class monoco-log
 * @@static
 */

'use strict';


var $helper = require('./helper.js');


/* Private properties */


var ID = '_id';


/* Public methods */


/*
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
function unknownProperty(propertyName, schema) {
    var message = '';

    if (schema[ID]) {
        message = "unknown property '" + propertyName + "' for the definition of " + schema[ID];
    } else {
        message = "unknown property '" + propertyName + "' for the meta attribute " + JSON.stringify(schema);
    }

    $helper.getMonoco().warning(message);
}


/*
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
function invalidPropertyType(propertyName, type, property) {
    $helper.getMonoco().warning("invalid type for property '" + JSON.stringify(propertyName) + "': expected '" + type + "' instead of '" + typeof property + "'");
}


/*
 * Invalid value for type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
function invalidEnumValue(value, type) {
    $helper.getMonoco().warning("invalid value for the enum value '" + value + "': expected '" + type + "' instead of " + typeof value + "'");
}


/*
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
function invalidClassName(componentId, type, constructorName) {
    $helper.getMonoco().warning("invalid class name for component '" + componentId + "': expected '" + type + "' instead of '" + constructorName + "'");
}


/*
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
function missingProperty(propertyName) {
    $helper.getMonoco().warning("missing property '" + propertyName + "'");
}


/*
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} classSource a class
 * @param {String} classToImp the class to implement
 */
function missingImplementation(classSource, classToImp) {
    $helper.getMonoco().warning("class '" + classSource + "' is missing for the implementation of the class '" + classToImp + "'");
}


/*
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function invalidTypeImp(property, className) {
    $helper.getMonoco().warning("invalid type for property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function missingPropertyImp(property, className) {
    $helper.getMonoco().warning("missing property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
function unknownPropertyImp(property, schema) {
    $helper.getMonoco().warning("unknown property '" + property + "' for the definition of '" + schema[ID] + "'");
}


/*
 * Invalid type definition.
 * @method invalidTypeDefinition
 * @param {Object} def a type definition
 */
function invalidTypeDefinition(def) {
    $helper.getMonoco().warning("can not load the type definition " + def);
}


/*
 * Invalid property name.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
function invalidPropertyName(id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getMonoco().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getMonoco().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, propertyName) {
    $helper.getMonoco().warning("can not set read-only property " + propertyName + " on component '" + id + "'");
}


/*
 * Invalid document on a monoco database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidObjectOnInsert(doc, collectionName) {
    $helper.getMonoco().warning("invalid document " + JSON.stringify(doc) + " on an insert operation on collection " + collectionName);
}


/*
 * Invalid property on a monoco database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
function invalidPropertyTypeOnDbUpdate(collectionName, id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection " + collectionName + ": expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection " + collectionName + ": expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}


/*
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
function unknownMethod(classId, methodName) {
    $helper.getMonoco().warning("try to call an unknown method '" + methodName + "' for the class '" + classId + "'");
}


/*
 * Try to create an invalid MonocoDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
function invalidCollectionName(name) {
    $helper.getMonoco().warning("invalid name for creating the collection '" + name + "': there is no schema '" + name + "' in the metamodel");
}


/*
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 */
function invalidResultType(id, methodName) {
    $helper.getMonoco().warning("invalid type on the result of method '" + methodName + "' on component '" + id + "'");
}


/*
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId
 */
function unknownComponent(className, componentId) {
    $helper.getMonoco().warning("unkown class component '" + className + "' for component '" + componentId + "'");
}


/*
 * The monoco workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    $helper.getMonoco().warning('monoco has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @@param {String} methodName name of the component
 */
function invalidParamNumber(id, methodName) {
    $helper.getMonoco().warning("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
function invalidParamType(id, methodName, paramName) {
    $helper.getMonoco().warning("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
    $helper.getMonoco().warning("try to add more than one behavior for the state '" + stateName + "' on component class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
    $helper.getMonoco().warning("try to add a behavior with an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
    $helper.getMonoco().warning("try to remove a behavior from an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The master system is not found.
 * @method masterSystemNotFound
 */
function masterSystemNotFound() {
    $helper.getMonoco().warning("the master system is not found");
}


/*
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
function invalidType(value, typeName) {
    $helper.getMonoco().warning("invalid type for value '" + JSON.stringify(value) + "': expected '" + typeName + "'");
}


/*
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
function unknownType(value) {
    $helper.getMonoco().warning("unknown type for value '" + JSON.stringify(value) + "'");
}


/*
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
function canNotYetValidate(id, className) {
    $helper.getMonoco().warning("can not yet validate if the component '" + JSON.stringify(id) + "' is an instance of '" + className + "'");
}


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
function invalidChannelEvent(message, eventName, type) {
    $helper.getMonoco().warning("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'" );
}


/* exports */


/**
 * This module contains all the functions that write a log.
 * 
 * @module monoco
 * @submodule monoco-log
 * @requires monoco-helper
 * @class monoco-log
 * @@static
 */


/**
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
exports.unknownProperty = unknownProperty;


/**
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
exports.invalidPropertyType = invalidPropertyType;


/**
 * Invalid value for a type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
exports.invalidEnumValue = invalidEnumValue;


/**
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
exports.invalidClassName = invalidClassName;


/**
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
exports.missingProperty = missingProperty;


/**
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} classSource a class
 * @param {String} classToImp the class to implement
 */
exports.missingImplementation = missingImplementation;


/**
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.invalidTypeImp = invalidTypeImp;


/**
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.missingPropertyImp = missingPropertyImp;


/**
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
exports.unknownPropertyImp = unknownPropertyImp;


/**
 * Invalid type definition.
 * @method invalidTypeDefinition
 * @param {Object} def a type definition
 */
exports.invalidTypeDefinition = invalidTypeDefinition;


/**
 * Invalid property type.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
exports.invalidPropertyName = invalidPropertyName;


/**
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
exports.readOnlyProperty = readOnlyProperty;


/**
 * Invalid document on a monoco database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
exports.invalidDocumentOnDbInsert = invalidObjectOnInsert;


/**
 * Invalid property on a monoco database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
exports.invalidPropertyTypeOnDbUpdate = invalidPropertyTypeOnDbUpdate;


/**
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
exports.unknownMethod = unknownMethod;


/**
 * Try to create an invalid MonocoDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
exports.invalidCollectionName = invalidCollectionName;


/**
 * Invalid result type of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 */
exports.invalidResultType = invalidResultType;


/**
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId
 */
exports.unknownComponent = unknownComponent;


/**
 * The monoco workflow has been restarted.
 * @method workflowRestarted
 */
exports.workflowRestarted = workflowRestarted;


/**
 * Invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @@param {String} methodName name of the component
 */
exports.invalidParamNumber = invalidParamNumber;


/**
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
exports.invalidParamType = invalidParamType;


/**
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.behaviorNotUnique = behaviorNotUnique;


/**
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOn = invalidStateOn;


/**
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOff = invalidStateOff;


/**
 * The master system is not found.
 * @method masterSystemNotFound
 */
exports.masterSystemNotFound = masterSystemNotFound;


/**
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
exports.invalidType = invalidType;


/**
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
exports.unknownType = unknownType;


/**
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
exports.canNotYetValidate = canNotYetValidate;


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
exports.invalidChannelEvent = invalidChannelEvent;
},{"./helper.js":6}],8:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module manages monoco metamodel. <br>
 * monoco metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
 * 
 * @module monoco
 * @submodule monoco-metamodel
 * @requires monoco-db
 * @requires monoco-log
 * @requires monoco-component
 * @requires monoco-workflow
 * @class monoco-metamodel
 * @static
 */

'use strict';

var $db = require('./db.js');
var $log = require('./log.js');
var $component = require('./component.js');
var $workflow = require('./workflow.js');


/* Private properties */


var ID = '_id',
NAME = '_name',
INHERITS = '_inherit',
SCHEMA = '_schema',
CLASS = '_class',
CORE = '_core',
EVENT_TYPE = 'event',
internalTypes = ['property', 'collection', 'method', 'event'],
defaultTypes = ['boolean', 'string', 'number', 'object', 'function', 'array'],
store = {
    metadef: {},
    catalog: {},
    inheritance: {},
    inheritanceTree: {},
    model: {},
    states: {},
    type: {},
    implementation: {}
};


/* Private methods */


/*
 * Create the inheritance tree.
 * @method createInheritanceTree
 * @private
 */
function createInheritanceTree() {
    var id = null,
    fatherId = null,
    newId = null;

    for (id in store.inheritance) {
        fatherId = store.inheritance[id];
        store.inheritanceTree[id] = [];

        while (fatherId) {
            store.inheritanceTree[id].push(fatherId);
            newId = fatherId;
            fatherId = store.inheritance[newId];
        }
    }
}


/*
 * Extend a schema with the properties of its parent.
 * @method extend
 * @param {type} id id of the schema to extend
 * @return {JSON} object extended with the properties of its parent
 * @private
 */
function extend(id) {
    var sonExtend = {},
    son = store.catalog[id],
    ancestors = store.inheritanceTree[id],
    length = 0,
    i = 0,
    ancestor = null,
    prop = '';

    if (ancestors) {
        length = ancestors.length;
        ancestors.reverse();
    }
    for (i = 0; i < length; i++) {
        ancestor = store.catalog[ancestors[i]];
        for (prop in ancestor) {
            if (prop.indexOf('_') !== 0) {
                sonExtend[prop] = ancestor[prop];
            }
        }
    }
    for (prop in son) {
        sonExtend[prop] = son[prop];
    }
    return sonExtend;
}


/*
 * Add the models.
 * @method createModel
 * @private
 */
function createModel() {
    var id = '';
    for (id in store.catalog) {
        store.model[id] = extend(id);
    }
}


/*
 * Test if all the schema are compliants with their schemas.
 * @method checkImplementation
 * @private
 */
function checkImplementation() {
    var id = '',
    classDef = null,
    classImp = '';

    for (id in store.model) {
        classDef = store.model[id];
        if (classDef && typeof classDef[SCHEMA] !== 'undefined') {
            classImp = store.model[classDef[SCHEMA]];
            if (classImp) {
                checkImp(classDef, classImp);
                store.implementation[classDef[ID]] = classImp[ID];
            } else {
                $log.missingImplementation(classDef[SCHEMA], classDef[ID]);
            }
        }
    }
}


/*
 * Test if a schema is compliant with its schema.
 * @method checkStates
 * @private
 */
function checkStates() {
    var id = '',
    classDef = null,
    type = '',
    states = [],
    attribute = '';

    for (id in store.model) {
        states = [];
        classDef = store.model[id];
        if (classDef && typeof classDef[SCHEMA] === 'undefined') {
            for (attribute in classDef) {
                type = classDef[attribute];
                if (attribute.indexOf('_') !== 0 && internalTypes.indexOf(type) !== -1) {
                    states.push(attribute);
                }
            }
        }
        store.states[id] = states;
    }
}


/*
 * Test if a schema is compliant with its schema.
 * @method checkImp
 * @param {JSON} classDef schema to test 
 * @param {JSON} classImp schema to validate
 * @private
 */
function checkImp(classDef, classImp) {
    var property = '',
    value = null;
    for (property in classImp) {
        if (property !== ID &&
        property !== NAME &&
        property !== INHERITS &&
        property !== SCHEMA &&
        property !== CLASS &&
        property !== CORE) {
            if (typeof classDef[property] !== 'undefined') {
                value = classDef[property];
                if (!checkSchema(value, classImp[property])) {
                    $log.invalidTypeImp(property, classDef[ID]);
                }
            } else {
                $log.missingPropertyImp(property, classDef[ID]);
            }
        }
    }
    // check if all properties are there
    for (property in classDef) {
        if (property !== ID &&
        property !== NAME &&
        property !== INHERITS &&
        property !== SCHEMA &&
        property !== CLASS &&
        property !== CORE) {
            if (typeof classImp[property] === 'undefined') {
                $log.unknownPropertyImp(property, classDef[ID]);
            }
        }
    }
}


/*
 * Test if a value has the correct type.
 * @method checkSchema
 * @param {Object} value value to test
 * @param {Object} type type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkSchema(value, type) {
    var result = true;
    if (hasType(type, 'string') && defaultTypes.indexOf(type) !== -1) {
        result = hasType(value, type);
    } else {
        result = checkCustomSchema(value, type);
    }
    return result;
}


/*
 * Test if a value has correct custom type.
 * @method checkCustomSchema
 * @param {type} value value to test
 * @param {String} typeName type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkCustomSchema(value, typeName) {
    var result = true,
    typeDef = store.type[typeName],
    length = 0,
    i = 0;

    if (!hasType(typeDef, 'undefined')) {
        if (!hasType(value, 'undefined')) {
            if (typeDef.type === 'array') {
                length = value.length;
                for (i = 0; i < length; i++) {
                    result = isValidSchema(value[i], typeDef.schema);
                    if (result === false) {
                        break;
                    }
                }
            } else {
                result = isValidSchema(value, typeDef.schema);
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }

    return result;
}


/*
 * Init the Database stucture.
 * @method initDbStructure
 * @private
 */
function initDbStructure() {
    $db.collection('MonocoSchema');
    $db.collection('MonocoExtendedSchema');
    $db.collection('MonocoClassInfo');
    $db.collection('MonocoBehavior');
    $db.collection('MonocoState');
    $db.collection('MonocoType');
    $db.collection('MonocoMessage');
    $db.collection('MonocoChannel');
}


/*
 * Create the Database structure (i.e. MonocoDatabaseCollection).
 * @method createDbStructure
 * @private
 */
function createDbStructure() {
    var modelName = '',
    modelDef = {},
    typeName = '';

    for (modelName in store.catalog) {
        modelDef = store.catalog[modelName];
        $db.MonocoSchema.insert(modelDef);
        if (typeof modelDef[SCHEMA] !== 'undefined' &&
        typeof $db[modelDef[ID]] === 'undefined' &&
        modelDef[CLASS] !== false) {
            $db.collection(modelDef[ID]);
        }
    }

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        $db.MonocoExtendedSchema.insert(modelDef);
    }

    for (typeName in store.type) {
        modelDef = store.type[typeName];
        modelDef._id = modelDef.name;
        $db.MonocoType.insert(modelDef);
    }
}


/*
 * Create all the classes of the model.
 * @method createClass
 * @private
 */
function createClass() {
    var modelName = '',
    modelDef = {};

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        if (typeof modelDef[SCHEMA] !== 'undefined' && modelDef[CLASS] !== false) {
            $component.create({
                "model": modelName
            });
        }
    }
}


/*
 * Create all the ClassInfo of the model.
 * @method createClassInfo
 * @private
 */
function createClassInfo() {
    var modelName = '',
    modelDef = {};

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        if (typeof modelDef[SCHEMA] !== 'undefined' && modelDef[CLASS] !== false) {
            $db.MonocoClassInfo.insert({
                "_id": modelDef._id + 'Info',
                "metamodel": store.model[modelDef[SCHEMA]],
                "model": modelDef
            });
        }
    }
}


/* 
 * Get the real name of the reference object / type.
 * @method getReference
 * @param {String} value
 * @return {String} real name
 * @private
 */
function getReference(value) {
    return value.replace('@', '');
}


/*
 * Is the value a custom type.
 * @method isCustomType
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isCustomType(value) {
    var result = hasType(value, 'string') &&
    defaultTypes.indexOf(value) === -1 &&
    !isReference(value);

    return result;
}


/*
 * Is the value a reference.
 * @method isReference
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isReference(value) {
    return value.indexOf('@') !== -1;
}


/*
 * Get the real type of a value.
 * @method getType
 * @param {type} value
 * @return {String} type of the value
 * @private
 */
function getType(value) {
    var type = '';

    if (Array.isArray(value)) {
        type = 'array';
    } else {
        type = typeof value;
    }

    return type;
}


/*
 * Get the class name of an object.
 * @method getClassName
 * @param {type} obj object
 * @return {String} the class name of the object
 * @private
 */
function getClassName(obj) {
    return obj.constructor.name;
}


/*
 * Check if the value is a valid enum value.
 * @method isValidEnumValue
 * @param {String} value
 * @param {Array} enumValue
 * @return {Boolean} the class name of the object
 * @private
 */
function isValidEnumValue(value, enumValue) {
    return enumValue.indexOf(value) !== -1;
}


/*
 * Check if a value has the specified type.
 * @param {type} value
 * @param {type} type
 * @returns {Boolean} true is value has type 'type'
 */
function hasType(value, type) {
    var result = true;

    switch (type) {
        case 'array':
            result = Array.isArray(value);
            break;
        default:
            result = (type === typeof value);
            break;
    }

    return result;
}


/* Public methods */


/*
 * Add a new schema.
 * @method schema
 * @param {JSON} importedSchema schema to add
 */
function schema(importedSchema) {
    var id = importedSchema[ID],
    inherit = importedSchema[INHERITS],
    name = importedSchema[NAME],
    length = 0,
    i = 0;

    // if no id, it will be the name by default
    if (hasType(id, 'undefined')) {
        id = name;
        importedSchema[ID] = name;
    }

    // check if schema is compliant with the meta meta model
    if (isValidObject(importedSchema, store.metadef.schema, false)) {

        store.catalog[id] = importedSchema;
        if (inherit) {
            length = inherit.length;
            for (i = 0; i < length; i++) {
                store.inheritance[id] = inherit[i];
            }
        }
    } else {
        $workflow.stop({
            "error": true,
            "message": "the schema '" + JSON.stringify(importedSchema) + "' is not valid"
        });
    }
}


/*
 * Add a new type.
 * @method type
 * @param {JSON} importedType
 */
function type(importedType) {
    var name = importedType.name;

    // check if type is compliant with the meta meta model
    if (isValidObject(importedType, store.metadef.type)) {
        if (name) {
            store.type[name] = importedType;
        } else {
            $log.invalidTypeDefinition(importedType);
        }
    } else {
        $workflow.stop({
            "error": true,
            "message": "the type '" + JSON.stringify(importedType) + "' is not valid"
        });
    }
}


/*
 * Init the metamodel.
 * @method init
 */
function init() {
    clear();
    store.metadef = {
        schema: {
            "_id": {
                "type": "string",
                "mandatory": true
            },
            "_name": {
                "type": "string",
                "mandatory": true
            },
            "_inherit": {
                "type": ["string"],
                "mandatory": false
            },
            "_schema": {
                "type": "string",
                "mandatory": false
            },
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            }
        },
        type: {
            "name": {
                "type": "string",
                "mandatory": true
            },
            "type": {
                "type": "string",
                "mandatory": true
            },
            "schema": {
                "type": "object",
                "mandatory": false
            },
            "value": {
                "type": ["string"],
                "mandatory": false
            },
            "core": {
                "type": "boolean",
                "mandatory": false
            }
        }

    };
    initDbStructure();
}


/*
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
function clear() {
    store = {
        catalog: {},
        inheritance: {},
        inheritanceTree: {},
        model: {},
        states: {},
        type: {},
        implementation: {}
    };
}


/*
 * Create the metamodel.
 * @method create
 */
function create() {
    createInheritanceTree();
    createModel();
    checkImplementation();
    checkStates();
    createDbStructure();
    createClass();
    createClassInfo();
}


/*
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
function isEvent(name, id) {
    var result = false,
    componentSchema = store.model[id],
    attributeType = '';

    if (componentSchema && componentSchema[SCHEMA]) {
        componentSchema = store.model[componentSchema[SCHEMA]];
    }

    if (componentSchema) {
        attributeType = componentSchema[name];
        if (attributeType === EVENT_TYPE) {
            result = true;
        }
    }

    return result;
}


/*
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
function isValidState(name, id) {
    var result = false,
    componentSchema = store.model[id],
    state = {};

    if (componentSchema && componentSchema[SCHEMA]) {
        componentSchema = store.model[componentSchema[SCHEMA]];
    }
    state = store.states[componentSchema[ID]];

    if (Array.isArray(state)) {
        result = state.indexOf(name) !== -1;
    }

    return result;
}


/*
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} value
 * @param {String} typeName
 * @return {Boolean} true if the object is compliant with the type
 */
function isValidType(value, typeName) {
    var result = true;

    function _checkReference(value, typeName) {
        var isValid = true;
        var typeRef = getReference(typeName);
        if (getClassName(value) !== typeRef) {
            isValid = false;
            $log.invalidType(value.id(), typeName);
        }
        return isValid;
    }

    if (!hasType(typeName, 'undefined')) {
        switch (true) {
            case isCustomType(typeName):
                result = checkCustomSchema(value, typeName);
                break;
            case isReference(typeName):
                result = _checkReference(value, typeName);
                break;
            default:
                result = hasType(value, typeName);
                break;
        }
    } else {
        $log.invalidType(value, typeName);
    }

    return result;
}


/*
 * Check if a value is compliant with a enum type.
 * @method isValidEnum
 * @param {String|Object} value
 * @param {Object} schema
 * @return {Boolean} true if the object is compliant with the enum
 */
function isValidEnum(value, schema) {
    var result = true;

    if (isReference(schema.type)) {
        result = $component.isInstanceOf($component.get(value), getReference(schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    } else {
        result = (hasType(value, schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if a schema is compliant with a schema
 * it is supposed to validate.
 * @method isValidSchema
 * @param {JSON} object
 * @param {JSON} schema
 * @return {Boolean}
 * @private
 */
function isValidSchema(object, schema) {
    var fieldName = '',
    field = null,
    result = true,
    mandatory = true,
    typeSchema = '',
    typeRef = '',
    realType = '',
    length = 0,
    i = 0;

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference() {
        var isValid = true,
        enumValue = [];

        typeRef = getReference(typeSchema);
        typeRef = object[typeRef];
        if (isCustomType(typeRef)) {
            if (store.type[typeRef]) {
                if (store.type[typeRef].schema) {
                    isValid = isValidSchema(field, store.type[typeRef].schema);
                } else {
                    // check type
                    isValid = hasType(field, store.type[typeRef].type);

                    // check value
                    enumValue = store.type[typeRef].value;
                    if (enumValue) {
                        isValid = isValidEnumValue(field, enumValue);
                    }
                }
            } else {
                isValid = false;
            }
        } else {
            if (typeRef === 'array') {
                isValid = Array.isArray(field);
            } else {
                if (isReference(typeRef)) {
                    isValid = hasType(field, 'object');
                } else {
                    isValid = hasType(field, typeRef);
                }
            }
        }
        if (!isValid) {
            $log.invalidPropertyType(field, typeRef, field);
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType() {
        var isValid = true;

        realType = getType(typeSchema);
        switch (realType) {
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidSchema(field, typeSchema);
                } else {
                    if (!hasType(field, typeSchema)) {
                        $log.invalidPropertyType(fieldName, typeSchema, field);
                        isValid = false;
                        break;
                    }
                }
                break;
            case 'array':
                length = field.length;
                for (i = 0; i < length; i++) {
                    if (isCustomType(typeSchema[0])) {
                        isValid = isValidSchema(field[i], store.type[typeSchema[0]].schema);
                    } else {
                        if (!hasType(field[i], typeSchema[0])) {
                            $log.invalidPropertyType(field[i], typeSchema[0], field[i]);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            default:
                break;
        }
        return isValid;
    }

    // type
    for (fieldName in object) {
        field = object[fieldName];

        if (hasType(schema[fieldName], 'undefined')) {
            $log.unknownProperty(fieldName, schema);
            return false;
        } else {
            typeSchema = schema[fieldName].type;
        }

        switch (true) {
            case isReference(typeSchema):
                result = _isValidReference();
                break;
            default:
                result = _isValidType();
                break;
        }
    }

    // mandatory
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        if (mandatory === true && hasType(object[fieldName], 'undefined')) {
            $log.missingProperty(fieldName);
            result = false;
            break;
        }
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object
 * @param {Object} schema
 * @param {Boolean} strict
 * @param {Boolean} cleanRef
 * @return {Boolean} true is the object is compliant with the schema
 */
function isValidObject(object, schema, strict, cleanRef) {
    var fieldName = '',
    field = null,
    result = true,
    mandatory = true,
    typeSchema = '',
    typeRef = '',
    realType = '',
    length = 0,
    i = 0;

    if (hasType(strict, 'undefined')) {
        strict = true;
    }

    if (hasType(cleanRef, 'undefined')) {
        strict = false;
    }

    /*
     * Check if a field is compliant with a custom type.
     * @return {Boolean} the field is compliant with the custom type
     * @private
     */
    function _isValidCustomType() {
        var isValid = true;

        typeSchema = store.type[typeSchema];
        if (typeSchema) {
            if (typeSchema.schema) {
                isValid = isValidObject(field, typeSchema.schema);
            } else {
                isValid = isValidEnum(field, typeSchema);
            }
        } else {
            isValid = false;
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference() {
        var isValid = true,
        comp = null,
        isComponent = false;

        typeRef = getReference(typeSchema);
        if (field && field.id) {
            comp = field;
            isComponent = true;
        } else {
            comp = $component.get(field);
        }

        if (!hasType(comp, 'undefined')) {
            if (getClassName(comp) !== typeRef) {
                isValid = false;
                $log.invalidType(field, typeRef);
            } else {
                if (isComponent && cleanRef) {
                    object[fieldName] = comp.id(); // store the id instead the full object 
                }
            }
        } else {
            // check for default value of an object ({} or null)
            switch (true) {
                case (hasType(field, 'object') && field !== null && Object.keys(field).length):
                case hasType(field, 'string'):
                    $log.canNotYetValidate(field, typeRef);
                    break;
                default:
                    break;
            }
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType() {
        var isValid = true,
        typeArray = '';

        realType = getType(typeSchema);
        switch (realType) {
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidObject(field, typeSchema);
                } else {
                    if (typeSchema === 'array') {
                        if (getType(field) !== 'array') {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    } else {
                        if (getType(field) !== typeSchema) {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            case 'array':
                if (Array.isArray(field)) {
                    length = field.length;
                    typeArray = typeSchema[0];
                    for (i = 0; i < length; i++) {
                        if (isCustomType(typeArray)) {
                            isValid = isValidObject(field[i], store.type[typeArray].schema);
                        } else {
                            if (!isReference(typeArray)) {
                                if (getType(field[i]) !== typeArray) {
                                    $log.invalidPropertyType(field[i], typeArray, field[i]);
                                    isValid = false;
                                    break;
                                }
                            } else {
                                if (getType(field[i]) === 'string') {
                                    // Case of an import of a system
                                    if (getClassName($component.get(field[i])) !== getReference(typeArray)) {
                                        $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                        isValid = false;
                                        break;
                                    }
                                } else {
                                    if (getClassName(field[i]) !== getReference(typeArray)) {
                                        $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                        isValid = false;
                                        break;
                                    } else {
                                        if (cleanRef) {
                                            field[i] = field[i].id(); // store the id instead the full object
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    isValid = false;
                    $log.invalidType(field, 'array');
                }
                break;
            default:
                isValid = false;
                $log.unknownType(field);
                break;
        }
        return isValid;
    }


    // type
    for (fieldName in object) {
        field = object[fieldName];

        if (!hasType(schema[fieldName], 'undefined')) {
            typeSchema = schema[fieldName].type;

            // cas of _id
            if (fieldName === '_id') {
                typeSchema = 'string';
            }

        } else {
            if (strict) {
                $log.unknownProperty(fieldName, schema);
                return false;
            } else {
                continue;
            }
        }

        switch (true) {
            case isCustomType(typeSchema):
                result = _isValidCustomType();
                break;
            case isReference(typeSchema):
                result = _isValidReference();
                break;
            default:
                result = _isValidType();
                break;
        }
    }

    // mandatory
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === true) {
                $log.missingProperty(fieldName);
                result = false;
            }
        }
    }

    return result;
}


/*
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object
 * @param {Object} schema
 */
function prepareObject(object, schema) {
    var fieldName = '',
    field = null,
    mandatory = true,
    defaultValue = '';

    // mandatory & default value
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        defaultValue = field.default;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === false && !hasType(defaultValue, 'undefined')) {
                object[fieldName] = defaultValue;
            }
        }
    }
}


/*
 * Get a schema.
 * @method get
 * @param {String} id of the schema
 * @return {Object} the schema
 */
function get(id) {
    var result = null;
    if (store.model[id]) {
        result = store.model[id];
    }
    return result;
}


/*
 * Get parents of a shema if any.
 * @method get
 * @param {String} id of the schema
 * @return {Array} id of the parents
 */
function getParents(id) {
    var result = [],
    model = null;

    model = store.model[id];
    if (model) {
        result = model[INHERITS];
    }
    if (!result) {
        result = [];
    }

    return result;
}

/*
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
function inheritFrom(name, parentName) {
    var result = false,
    parents = [],
    i = 0,
    length = 0;

    /*
     * 
     * Check if a class inherits from another one
     * @method _searchParent
     * @param {String} className name of the class
     * @param {String} ancestorName of the parent
     * @returns {Boolean} true if the component inherit from the specific class name
     * @private
     */
    function _searchParent(className, ancestorName) {
        var isAncestor = false,
        parents = [],
        i = 0,
        length = 0;

        parents = getParents(className);
        if (parents.length !== 0) {
            if (parents.indexOf(ancestorName) !== 1) {
                isAncestor = true;
            } else {
                for (i = 0; i < length; i++) {
                    isAncestor = _searchParent(parents[i], ancestorName);
                    if (isAncestor) {
                        break;
                    }
                }
            }
        }
        return isAncestor;
    }

    parents = getParents(name);
    if (parents.length !== 0) {
        if (parents.indexOf(parentName) !== 1) {
            result = true;
        } else {
            for (i = 0; i < length; i++) {
                result = _searchParent(parents[i], parentName);
                if (result) {
                    break;
                }
            }
        }
    }

    return result;
}


/* exports */


/**
 * This module manages monoco metamodel. <br>
 * monoco metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
 * 
 * @module monoco
 * @submodule monoco-metamodel
 * @requires monoco-db
 * @requires monoco-log
 * @requires monoco-component
 * @requires monoco-workflow
 * @class monoco-metamodel
 * @static
 */


/**
 * Init the metamodel.
 * @method init
 */
exports.init = init;


/**
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Add a new schema.
 * @param {JSON} schema
 * @method schema
 */
exports.schema = schema;


/**
 * Add a new type.
 * @param {JSON} type
 * @method type
 */
exports.type = type;


/**
 * Create the metamodel.
 * @method create
 */
exports.create = create;


/**
 * Get a schema.
 * @method get
 * @param {String} id of the schema
 * @return {Object} the schema
 */
exports.get = get;


/**
 * Get parents of a shema if any.
 * @method getParents
 * @param {String} id of the schema
 * @return {Array} id of the parents
 */
exports.getParents = getParents;


/*
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
exports.inheritFrom = inheritFrom;


/**
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object
 * @param {Object} schema
 * @param {Boolean} strict
 * @param {Boolean} cleanRef
 * @return {Boolean} true is the object is compliant with the schema
 */
exports.isValidObject = isValidObject;


/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object
 * @param {Object} schema
 */
exports.prepareObject = prepareObject;


/**
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} object
 * @param {String} type
 * @return {Boolean} true if the object is compliant with the type
 */
exports.isValidType = isValidType;

/**
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value
 * @param {Schema} schema
 * @return {Boolean} true if the object is compliant with the enum
 */
exports.isValidEnum = isValidEnum;


/**
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
exports.isValidState = isValidState;


/**
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name name of the attribute
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
exports.isEvent = isEvent;
},{"./component.js":4,"./db.js":5,"./log.js":7,"./workflow.js":11}],9:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module is the main module of monoco. <br>
 * It inits monoco metamodel and loads monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');


/* Private Property */

var sytemId = '',
system = '';


/* Init Metamodel */


$metamodel.init();


/* Init monoco from a  system */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of monoco. <br>
 * It inits monoco metamodel and loads monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */


/**
 * monoco instance.
 * @property monoco
 * @type Monoco
 */
module.exports = $component.get('monoco');
},{"../build/system/system.js":1,"./component.js":4,"./db.js":5,"./metamodel.js":8}],10:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * This module manages the states of all thecomponents.
 * 
 * @module monoco
 * @submodule monoco-state
 * @requires monoco-db
 * @class monoco-state
 * @static
 */

'use strict';

var $db = require('./db.js');


/* Private properties */


var store = {};


/* Public methods */


/*
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 */
function set(id, state) {
    store[id] = state;
    $db.store.MonocoState[id] = {"name": state};
}


/*
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} state of the component
 */
function get(id) {
    return store[id];
}


/*
 * Remove all the states of the components from the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the states of all the components.
 * 
 * @module monoco
 * @submodule monoco-state
 * @requires monoco-db
 * @class monoco-state
 * @static
 */


/**
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 */
exports.set = set;


/**
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} the state of the component.
 */
exports.get = get;


/**
 * Remove all the states of the components from the memory.
 * @method clear
 */
exports.clear = clear;
},{"./db.js":5}],11:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module manages the workflow of monoco. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and monoco. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module monoco
 * @submodule monoco-workflow
 * @requires monoco-metamodel
 * @requires monoco-component
 * @requires monoco-behavior
 * @requires monoco-channel
 * @requires monoco-state
 * @requires monoco-helper
 * @requires monoco-log
 * @requires monoco-db
 * @class monoco-workflow 
 * @static
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $component = require('./component.js');
var $behavior = require('./behavior.js');
var $channel = require('./channel.js');
var $state = require('./state.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $db = require('./db.js');


/* Private methods */


/**
 * The MonocoError class.
 * @class MonocoError
 * @constructor
 * @param {String} message message of the error
 */
function MonocoError(message) {
    this.message = message;
    this.name = "MonocoError";
}
MonocoError.prototype = new Error();
MonocoError.prototype.constructor = MonocoError;


/*
 * Get all the names of the parameter of a method.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the names of all parameters of the method for the class
 * @private
 */
function getParamNames(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].name);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Get the number of parameters of a method.
 * @method getParamNumber
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} number of parameters min and max for the method
 * @private
 */
function getParamNumber(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0,
    min = 0,
    max = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (typeof params[i].mandatory === 'undefined' || params[i].mandatory === true) {
                    min = min + 1;
                }
                max = max + 1;
            }
        }
        result.push(min);
        result.push(max);
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Set the default value of the non mandatory parameters of a method.
 * @method setDefaultValue
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @param {Array} args arguments
 * @return {Array} arguments with default values
 * @private
 */
function setDefaultValue(id, methodName, args) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (params[i].mandatory === false && typeof args[i] === 'undefined') {
                    result.push(params[i].default);
                } else {
                    result.push(args[i]);
                }
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Get the type returned by a method.
 * @method getReturnType
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {String} the type returned by the method
 * @private
 */
function getReturnType(id, methodName) {
    var resultType = null,
    result = null;

    resultType = $metamodel.get(id)[methodName].result;
    if (resultType) {
        result = resultType;
    }
    return result;
}


/*
 * Get all the type of the parameters of a method
 * @method getParamTypes
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the types of the parameters of a method
 * @private
 */
function getParamTypes(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].type);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Check if conditions on output are compliant with the metamodel
 * @method checkResult
 * @param {Object} params
 * @return {Boolean} true if conditions on ouput are compliant with the metamodel
 * @private
 */
function checkResult(params) {
    params = params || {};

    var component = params.component || null,
    methodName = params.methodName || '',
    methodResult = params.methodResult || undefined,
    componentClassName = '',
    returnType = null,
    result = true;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    returnType = getReturnType(componentClassName, methodName);

    if (returnType !== null) {
        if (returnType === 'array') {
            if (!Array.isArray(methodResult)) {
                result = false;
                $log.invalidResultType(component.id(), methodName);
            }
        } else {
            if (typeof methodResult !== returnType) {
                result = false;
                $log.invalidResultType(component.id(), methodName);
            }
        }
    }

    return result;
}


/*
 * Get the actions of the specified state
 * @method getActions
 * @param {Object} component a monoco component
 * @param {String} name name of the state
 * @param {Boolean} isEvent true if the state is an event
 * @return {Array} list of the actions
 * @private
 */
function getActions(component, name, isEvent) {
    var action = $behavior.getActions(component.id(), name),
    parents = [],
    length = 0,
    i = 0,
    parent = null;

    if (!action.length || isEvent) {
        if (component.constructor.name !== 'Function') {
            action = action.concat(getActions($component.get(component.constructor.name), name, isEvent));
        } else {
            parents = $metamodel.getParents(component.name);
            length = parents.length;
            for (i = 0; i < length; i++) {
                parent = $component.get(parents[i]);
                if (parent) {
                    action = action.concat(getActions(parent, name, isEvent));
                } else {
                    $log.unknownComponent(parents[i], component.name);
                }
                if (action.length) {
                    break;
                }
            }
        }
    }

    if (action.length) {
        action.reverse();
    }

    return action;
}


/*
 * Call an action and make some Dependency Injection if it is a core action
 * @method callAction
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Array} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @return {Boolean} result of the action
 */
function callAction(component, state, action, params, isEvent) {
    var result = null,
    injectedParams = [],
    i = 0,
    length = 0;

    params = setDefaultValue(component.constructor.name, state, params);

    try {
        if (action.core) {
            length = params.length;
            for (i = 0; i < length; i++) {
                injectedParams.push(params[i]);
            }
            injectedParams.push($component);
            injectedParams.push($db);
            injectedParams.push($metamodel);
            injectedParams.push(exports);
            injectedParams.push($behavior);
            injectedParams.push($log);
            injectedParams.push($channel);

            if (isEvent) {
                setTimeout(action.action.bind.apply(action.action, [component].concat(injectedParams)), 0);
            } else {
                result = action.action.apply(component, injectedParams);
            }
        } else {
            if (isEvent) {
               setTimeout(action.action.bind.apply(action.action, [component].concat(params)), 0);
            } else {
               result = action.action.apply(component, params);
            }
        }
    } catch (e) {
        if (e instanceof MonocoError) {
            throw e;
        } else {
            if (component && component.error) {
                component.error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
            if ($helper.getMonoco()) {
                $helper.getMonoco().error({
                    "message": "error when when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
        }
    }

    return result;
}


/* Public methods */


/*
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
function checkParams(params) {
    params = params || {};

    var component = params.component || null,
    methodName = params.methodName || '',
    args = params.args || '',
    paramsName = [],
    paramsType = [],
    paramsNumber = [],
    componentClassName = '',
    length = args.length,
    i = 0,
    param = null,
    result = true;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    paramsName = getParamNames(componentClassName, methodName);
    paramsType = getParamTypes(componentClassName, methodName);
    paramsNumber = getParamNumber(componentClassName, methodName);

    // case of object
    if (typeof length === 'undefined') {
        length = 1;
    }

    if (paramsNumber.indexOf(length) === -1) {
        result = false;
        $log.invalidParamNumber(component.id(), methodName);
    }

    for (i = 0; i < length; i++) {
        param = args[i];
        if (typeof param === 'undefined') {
            if (i < paramsNumber[0]) {
                result = false;
                $log.invalidParamNumber(component.id(), methodName);
            } else {
                continue;
            }
        } else {
            if (!$metamodel.isValidType(param, paramsType[i])) {
                result = false;
                $log.invalidParamType(component.id(), methodName, paramsName[i]);
            }
        }
    }

    return result;
}


/*
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method or an event <br>
 * 2. Search if there is a behavior with an action for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the conditons on input are compliant with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If not an of event, check if the conditons on input are compliant with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
function state(params) {

    params = params || {};
    params.component = params.component || '';
    params.state = params.state || '';
    params.data = params.data || [];

    var component = null,
    currentState = '',
    actions = [],
    action = null,
    result = null,
    i = 0,
    length = 0,
    isEvent = false;

    currentState = $state.get(params.component);

    if (currentState !== 'destroy') {

        component = $component.get(params.component);
        if (component) {
            isEvent = $metamodel.isEvent(params.state, component.constructor.name);
            actions = getActions(component, params.state, isEvent);
        }

        if (actions.length) {

            if (checkParams({
                "component": component,
                "methodName": params.state,
                "args": params.data
            })) {

                if (!isEvent) {
                    action = actions[0];
                    result = callAction(component, params.state, action, params.data, false);

                    if (checkResult({
                        "component": component,
                        "methodName": params.state,
                        "methodResult": result
                    })) {
                        $state.set(component.id(), params.state);
                    }
                } else {

                    length = actions.length;
                    for (i = 0; i < length; i++) {
                        action = actions[i];
                        callAction(component, params.state, action, params.data, true);
                    }

                    $state.set(component.id(), params.state);
                }
            }
            return result;
        } else {
            if (component) {
                $state.set(component.id(), params.state);
            }
        }
    } else {
        exports.stop({
            "error": true,
            "message": "trying to change the state of a destroyed component '" + params.component + "'"
        });
    }
}


/*
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
function stop(params) {
    params = params || {};

    if (typeof params.error === 'undefined') {
        params.error = false;
    }
    params.message = params.message || '';

    exports.state = function () {
    };

    if (params.error) {
        if (params.message) {
            throw new MonocoError("monoco has been stopped because " + params.message);
        } else {
            throw new MonocoError("monoco has been stopped because of an unknown error");
        }
    } else {
        console.warn('monoco: monoco has been stopped');
    }
}


/*
 * Restart the workflow engine from the last state.
 * @method restart
 */
function restart() {
    exports.state = state;
    $log.workflowRestarted();
}


/* exports */


/**
 * This module manages the workflow of monoco. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and monoco. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module monoco
 * @submodule monoco-workflow
 * @requires monoco-metamodel
 * @requires monoco-component
 * @requires monoco-behavior
 * @requires monoco-channel
 * @requires monoco-state
 * @requires monoco-helper
 * @requires monoco-log
 * @requires monoco-db
 * @class monoco-workflow 
 * @static
 */


/**
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method or an event <br>
 * 2. Search if there is a behavior with an action for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the conditons on input are compliant with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If not an of event, check if the conditons on input are compliant with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
exports.state = state;


/**
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
exports.stop = stop;


/**
 * Restart the workflow engine from the last state.
 * @method restart
 */
exports.restart = restart;


/**
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
exports.checkParams = checkParams;
},{"./behavior.js":2,"./channel.js":3,"./component.js":4,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8,"./state.js":10}]},{},[9])(9)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NoYW5uZWwuanMiLCJzcmMvY29tcG9uZW50LmpzIiwic3JjL2RiLmpzIiwic3JjL2hlbHBlci5qcyIsInNyYy9sb2cuanMiLCJzcmMvbWV0YW1vZGVsLmpzIiwic3JjL21vbm9jby5qcyIsInNyYy9zdGF0ZS5qcyIsInNyYy93b3JrZmxvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ozQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3YzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3lzdGVtXG4gKiBAY2xhc3MgbW9ub2NvLXN5c3RlbVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG5cbi8qXG4gKiBtb25vY28gY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7TW9ub2NvU3lzdGVtfSBzeXN0ZW1cbiAqL1xudmFyIHN5c3RlbSA9IHtcbiAgICBcIm5hbWVcIjogXCJtb25vY29cIixcbiAgICBcInZlcnNpb25cIjogXCIwLjMuM1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXCIsXG4gICAgXCJfaWRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcbiAgICBcInNjaGVtYXNcIjoge1xuICAgICAgICBcIk1vbm9jb1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmaW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxvYWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVhZHlcIjoge31cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29CZWhhdmlvclwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0JlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0JlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3RhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0JlaGF2aW9yU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQmVoYXZpb3JTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29CZWhhdmlvclNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NoYW5uZWxcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvQ2hhbm5lbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGlzdGVuXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2FsbGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYm9vbGVhblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2hhbm5lbFNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NoYW5uZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DaGFubmVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsaXN0ZW5cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic2VuZFwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29DbGFzc0luZm9TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtb2RlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1ldGhvZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXZlbnRzXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29Db21wb25lbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXNlQ29yZUFQSVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9mZlwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9ySWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlcXVpcmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkBNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW5pdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29uZlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJlcnJvclBhcmFtXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJvZmZcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiaW5pdFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiZXZlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvRGF0YWJhc2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudElkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNsYXNzSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvRGF0YWJhc2VTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29EYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluc2VydFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInJlbW92ZVwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29NZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvTWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb01lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb01lc3NhZ2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvTWVzc2FnZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01lc3NhZ2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZnJvbVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvTWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01ldGFtb2RlbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb01ldGFtb2RlbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmaW5kXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImxvYWRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIndhcm5pbmdcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJyZWFkeVwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29TdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1N0YXRlXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3RhdGVcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb1N0YXRlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3RhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N0YXRlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3lzdGVtXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFzdGVyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4xXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVhZHlcIjoge30sXG4gICAgICAgICAgICBcInN5bmNcIjoge30sXG4gICAgICAgICAgICBcIm1haW5cIjoge31cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29TeXN0ZW1TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1haW5cIjogXCJldmVudFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidHlwZXNcIjoge1xuICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJyb3JQYXJhbVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJlcnJvclBhcmFtXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmcm9tXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1ldGhvZFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGFyYW1ldGVyXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtZXRlclwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgIFwiMWFhZWUxZTYzMTFmZjM5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFhZWUxZTYzMTFmZjM5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIm1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxvYWRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbG9hZCh1cmwsIGFzeW5jKSB7IHZhciB4aHIgPSBudWxsLCBjYWxsYmFja0xvYWQgPSBudWxsOyB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgY2FsbGJhY2tMb2FkID0gZnVuY3Rpb24gY2FsbGJhY2tMb2FkKHN5c3RlbSkgeyB2YXIgc3lzSWQgPSAkZGIuc3lzdGVtKHN5c3RlbSk7IHZhciBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCk7IGlmIChzeXMpIHsgc3lzLm1haW4oKTsgfSB9OyBpZiAoYXN5bmMpIHsgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7IHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgeyBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7IGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpOyB9IH0gfTsgeGhyLnNlbmQobnVsbCk7IH0gZWxzZSB7IHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTsgeGhyLnNlbmQobnVsbCk7IGlmICh4aHIuc3RhdHVzID09PSAyMDApIHsgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7IH0gfSB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY2MDAxNzczYTE4NzkxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY2MDAxNzczYTE4NzkxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIm1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlYWR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlYWR5KCkgeyB2YXIgc3lzdGVtcyA9IFtdLCBzeXN0ZW0gPSBudWxsLCBpID0gMCwgbGVuZ3RoID0gMDsgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHsgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTsgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBzeXN0ZW0gPSBzeXN0ZW1zW2ldOyB0aGlzLmxvYWQoc3lzdGVtLmhyZWYsIGZhbHNlKTsgfSB9IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWE3ZTYxN2E2YjExMDM0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWE3ZTYxN2E2YjExMDM0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKGRhdGEpIHsgY29uc29sZS5lcnJvcignbW9ub2NvOiAnICsgZGF0YS5tZXNzYWdlLCBkYXRhLmVycm9yKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTg5ZTFlMzAzMWEzMThcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTg5ZTFlMzAzMWEzMThcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZmluZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBmaW5kKENsYXNzLCBxdWVyeSkgeyByZXR1cm4gJGNvbXBvbmVudC5maW5kKENsYXNzLCBxdWVyeSk7fVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE2ZjFhMWFkOTIxNzYzZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2ZjFhMWFkOTIxNzYzZVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKG5hbWUpIHsgdmFyIFN5c3RlbSA9IG51bGwsIHN5c3RlbSA9IHt9LCByZXN1bHQgPSBbXSwgY29uZiA9IHt9OyBpZiAobmFtZSkgeyBjb25mLm1hc3RlciA9IHRydWU7IGNvbmYubmFtZSA9IG5hbWU7IFN5c3RlbSA9IHRoaXMucmVxdWlyZSgnTW9ub2NvU3lzdGVtJyk7IHN5c3RlbSA9IG5ldyBTeXN0ZW0oY29uZik7IH0gZWxzZSB7IHJlc3VsdCA9IHRoaXMuZmluZCgnTW9ub2NvU3lzdGVtJywgeydtYXN0ZXInOiB0cnVlfSk7IGlmIChyZXN1bHQubGVuZ3RoKSB7IHN5c3RlbSA9IHJlc3VsdFswXTsgfSB9IHJldHVybiBzeXN0ZW07IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWMwODcxOGY5ODE0Yzc2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWMwODcxOGY5ODE0Yzc2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7IGNvbnNvbGUud2FybignbW9ub2NvOiAnICsgbWVzc2FnZSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMThmMTQxZmVhZTE1M2IzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMThmMTQxZmVhZTE1M2IzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaXN0ZW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBhY3Rpb24pIHsgJGNoYW5uZWwubGlzdGVuKGV2ZW50LCBhY3Rpb24pOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIxYTQxNDZjZTE5YmMwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTIxYTQxNDZjZTE5YmMwXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzZW5kXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNlbmQobWVzc2FnZSkgeyByZXR1cm4gJGNoYW5uZWwuc2VuZChtZXNzYWdlKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyNTBjMTJmYzAxMmM4YlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyNTBjMTJmYzAxMmM4YlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudChuYW1lKSB7IHZhciByZXN1bHQgPSB7fTsgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdldmVudCcpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMThjZDUxN2YzNzEyNjk1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMThjZDUxN2YzNzEyNjk1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudHMoKSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksIGl0ZW0gPSAnJywgcmVzdWx0ID0gW10sIGkgPSAwLCBsZW5ndGggPSAwOyBsZW5ndGggPSBrZXlzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGl0ZW0gPSBrZXlzW2ldOyBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ2V2ZW50JykgeyByZXN1bHQucHVzaChpdGVtKTsgfSB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJjZjUxMzA3NTE0ZDFjXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJjZjUxMzA3NTE0ZDFjXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2QobmFtZSkgeyB2YXIgcmVzdWx0ID0ge307IGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnbWV0aG9kJykgeyByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxODFiZjEyOTFlMThkYTJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxODFiZjEyOTFlMThkYTJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWV0aG9kc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2RzKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdtZXRob2QnKSB7IHJlc3VsdC5wdXNoKGl0ZW0pOyB9IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxY2FhMjEzNGU3MTQ5NWRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxY2FhMjEzNGU3MTQ5NWRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydGllc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0aWVzKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdwcm9wZXJ0eScpIHsgcmVzdWx0LnB1c2goaXRlbSk7IH0gfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE4ZmQ5MTQ0YjAxYjMyMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE4ZmQ5MTQ0YjAxYjMyMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7IHZhciByZXN1bHQgPSB7fTsgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQwNmYxOTY0MTFkNTI2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQwNmYxOTY0MTFkNTI2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZGVzdHJveSgpIHsgJGNvbXBvbmVudC5kZXN0cm95KHRoaXMuaWQoKSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNWUxMTEyMTU2MTk1ZDJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNWUxMTEyMTU2MTk1ZDJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG9mZihzdGF0ZSwgYmVoYXZpb3JJZCkgeyB2YXIgYXJncyA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDc7IGkrKykgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfSBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXFwiY29tcG9uZW50XFxcIjogdGhpcywgXFxcIm1ldGhvZE5hbWVcXFwiOiBcXFwib2ZmXFxcIiwgXFxcImFyZ3NcXFwiOiBhcmdzfSkpIHsgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7JGJlaGF2aW9yLnJlbW92ZSh7XFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLCBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKCksIFxcXCJzdGF0ZVxcXCI6IHN0YXRlfSk7IH0gZWxzZSB7ICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyh7IFxcXCJtZXNzYWdlXFxcIjpcXFwiaW52b2tlICdvZmYnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIn0pOyB9IH0gfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwZWYzMTRhYjExMTY2NVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwZWYzMTRhYjExMTY2NVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlcXVpcmUoaWQpIHsgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzYWRmMTJkYmYxZDAwOVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzYWRmMTJkYmYxZDAwOVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN1YnN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdWJzeXN0ZW0ocGFyYW1zKSB7IHJldHVybiAkZGIuc3Vic3lzdGVtKHBhcmFtcyk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTA2YTEwMjBiMWVmYzVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTA2YTEwMjBiMWVmYzVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKHN5c3RlbSkgeyByZXR1cm4gJGRiLnN5c3RlbShzeXN0ZW0pOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTFjOWQxMDRiZjExYWU3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTFjOWQxMDRiZjExYWU3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjcmVhdGUoKSB7ICRtZXRhbW9kZWwuY3JlYXRlKCk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMjAyYTE3MjU5MWE4MDJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMjAyYTE3MjU5MWE4MDJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHsgJG1ldGFtb2RlbC5zY2hlbWEoc2NoZW1hKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyNDM0MTZhOTIxMmM4MVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyNDM0MTZhOTIxMmM4MVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29NZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHR5cGUodHlwZSkgeyAkbWV0YW1vZGVsLnR5cGUodHlwZSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNDRhZTFmMGE5MTY4NWVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNDRhZTFmMGE5MTY4NWVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3luY1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeW5jKCkgeyB2YXIgZHVtcCA9ICRkYi5kdW1wKCk7IHRoaXMuc2NoZW1hcyhkdW1wLnNjaGVtYXMpOyB0aGlzLnR5cGVzKGR1bXAudHlwZXMpOyB0aGlzLmJlaGF2aW9ycyhkdW1wLmJlaGF2aW9ycyk7IHRoaXMuY29tcG9uZW50cyhkdW1wLmNvbXBvbmVudHMpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWI4YmYxOWNhNDE3N2NkXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWI4YmYxOWNhNDE3N2NkXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1haW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWFpbigpIHsgdmFyIG1vbm9jbyA9ICRjb21wb25lbnQuZ2V0KCdtb25vY28nKTsgbW9ub2NvLnJlYWR5KCk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJNb25vY29cIjoge1xuICAgICAgICAgICAgXCJtb25vY29cIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4zLjNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NoYW5uZWxcIjoge1xuICAgICAgICAgICAgXCJjaGFubmVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImNoYW5uZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiZGJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJtZXRhbW9kZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyogZXhwb3J0cyAgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3lzdGVtXG4gKiBAY2xhc3MgbW9ub2NvLXN5c3RlbVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBtb25vY28gY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7TW9ub2NvU3lzdGVtfSBzeXN0ZW1cbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG4iLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBcbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1jaGFubmVsXG4gKiBAY2xhc3MgbW9ub2NvLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRjaGFubmVsID0gcmVxdWlyZSgnLi9jaGFubmVsLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIGZyb20gYSBzdHJpbmcuXG4gKiBUaGUgY3JlYXRlZCBmdW5jdGlvbjpcbiAqIC0gd2lsbCBiZSBhIG5hbWVkIGZ1bmN0aW9uLFxuICogLSBoYXMgdGhlIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCBhbmRcbiAqIC0gY2FuIGhhdmUgc29tZSBjb3JlIG1vZHVsZXMgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgY3JlYXRlRnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGRlZmF1bHQgbmFtZSBvZiB0aGUgZnVuY3Rpb24gXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIG1vbm9jbyBjb3JlIGJlaGF2aW9yLlxuICogSW4gdGhhdCBjYXNlLCB0aGUgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZCBpbiBhIHN5c3RlbSAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBtb25vY28gY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgZnVuY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNyZWF0ZWQgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uKG5hbWUsIGZ1bmMsIGNvcmUsIHVzZUNvcmVBUEkpIHtcbiAgICB2YXIgZnVuY05hbWUgPSAnJyxcbiAgICBiZWdpbkJvZHkgPSAtMSxcbiAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgcGFyYW1zID0gW10sXG4gICAgcGFyYW1zQ2xlYW4gPSBbXSxcbiAgICBmdW5jQm9keSA9ICcnLFxuICAgIGhlYWRlciA9ICcnLFxuICAgIGFjdGlvbiA9IG51bGw7XG5cbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY05hbWUgPSBoZWFkZXIuc3BsaXQoJygnKVswXS5yZXBsYWNlKCdmdW5jdGlvbicsICcnKS50cmltKCk7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlci5zcGxpdCgnKCcpWzFdLnJlcGxhY2UoJyknLCAnJykudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcblxuICAgIGZ1bmNOYW1lID0gZnVuY05hbWUgfHwgbmFtZTtcblxuICAgIC8vIGZvciBhY2Nlc3NpbmcgbW9ub2NvIGNvcmUgQVBJc1xuICAgIGlmICh1c2VDb3JlQVBJKSB7XG4gICAgICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMucHVzaCgnJGNvbXBvbmVudCcpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGRiJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckd29ya2Zsb3cnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRiZWhhdmlvcicpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGxvZycpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGNoYW5uZWwnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKFwiICsgcGFyYW1zLmpvaW4oJywnKSArIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICsgcGFyYW1zLmpvaW4oXCInLCdcIikgKyBcIicsIGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKCkgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gbW9ub2NvIGRhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBtb25vY28gY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gbW9ub2NvIGRhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGFkZChpZCwgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgY29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG5cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvcmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9yZVtiZWhhdmlvcklkXSA9IGFjdGlvbjtcblxuICAgICRkYi5Nb25vY29CZWhhdmlvci5pbnNlcnQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJhY3Rpb25cIjogYWN0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgIFwidXNlQ29yZUFQSVwiOiB1c2VDb3JlQVBJLFxuICAgICAgICBcImNvcmVcIjogY29yZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgICBwYXJhbXMuY29tcG9uZW50SWQgPSBwYXJhbXMuY29tcG9uZW50SWQgfHwgJyc7XG4gICAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgICAgICBpZiAocGFyYW1zLmJlaGF2aW9ySWQpIHtcbiAgICAgICAgICAgICRkYi5Nb25vY29CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoaWQsIHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGRiUmVzdWx0ID0gW10sXG4gICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGRiUmVzdWx0ID0gJGRiLk1vbm9jb0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgZGJSZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoYmVoYXZpb3IpIHtcbiAgICAgICAgYWN0aW9uID0gc3RvcmVbYmVoYXZpb3IuX2lkXTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihiZWhhdmlvci5zdGF0ZSwgYmVoYXZpb3IuYWN0aW9uLCBiZWhhdmlvci5jb3JlLCBiZWhhdmlvci51c2VDb3JlQVBJKTtcbiAgICAgICAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgXCJjb3JlXCI6IGJlaGF2aW9yLmNvcmUsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNoYW5uZWxcbiAqIEBjbGFzcyBtb25vY28tYmVoYXZpb3JcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBtb25vY28gZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIG1vbm9jbyBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBtb25vY28gZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5hZGQgPSBhZGQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKSkgPGJyPlxuICovXG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcblxuXG4vKipcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZ2V0QWN0aW9ucztcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY2hhbm5lbC5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEBjbGFzcyBtb25vY28tY2hhbm5lbFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuLypcbiAqIExpc3RlbiB0byBhbiBldmVudC5cbiAqIEBtZXRob2QgbGlzdGVuXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBjb2RlIHRvIGV4ZWN1dGVcbiAqL1xuZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBhY3Rpb24pIHtcbiAgICAkYmVoYXZpb3IuYWRkKCdjaGFubmVsJywgZXZlbnQsIGFjdGlvbiwgdHJ1ZSk7XG59XG5cblxuLypcbiAqIFNlbmQgYSBtZXNzYWdlIGludG8gdGhlIGNoYW5uZWwuXG4gKiBAbWV0aG9kIHNlbmRcbiAqIEBwYXJhbSB7dHlwZX0gbWVzc2FnZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIG1lc3NhZ2Ugd2FzIHNlbnRcbiAqL1xuZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XG4gICAgdmFyIG1lc3NhZ2VzID0gW10sXG4gICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICBzeXN0ZW1JZCA9ICcnLFxuICAgIHN5c3RlbXMgPSBbXTtcblxuICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgc3lzdGVtcyA9ICRoZWxwZXIuZ2V0TW9ub2NvKCkuZmluZCgnTW9ub2NvU3lzdGVtJywgeydtYXN0ZXInOiB0cnVlfSk7XG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdLmlkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZXNzYWdlLmZyb20gPSBzeXN0ZW1JZDtcblxuICAgIG1lc3NhZ2VzID0gJGRiLk1vbm9jb01lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgaWYgKCFtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY2hhbm5lbC5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEBjbGFzcyBtb25vY28tY2hhbm5lbFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBMaXN0ZW4gdG8gYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGxpc3RlblxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gY29kZSB0byBleGVjdXRlXG4gKi9cbmV4cG9ydHMubGlzdGVuID0gbGlzdGVuO1xuXG5cbi8qKlxuICogU2VuZCBhIG1lc3NhZ2UgaW50byB0aGUgY2hhbm5lbC5cbiAqIEBtZXRob2Qgc2VuZFxuICogQHBhcmFtIHt0eXBlfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSB3YXMgc2VudFxuICovXG5leHBvcnRzLnNlbmQgPSBzZW5kOyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IG1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbkVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU3ViIGNsYXNzIHRvIG92ZXJyaWRlIHB1c2ggYW5kIHBvcCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3MuXG4gKiBAY2xhc3MgbW9ub2NvQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbW9ub2NvQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICBhcnJEYiA9IFtdLFxuICAgIGNsYXNzSWQgPSAnJyxcbiAgICB0eXBlID0gJyc7XG5cbiAgICBjb25mID0gY29uZiB8fCB7fTtcbiAgICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8wqAnJztcbiAgICB0eXBlID0gY29uZi50eXBlIHx8wqAnJztcbiAgICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKG1vbm9jby5yZXF1aXJlKHZhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJyLnB1c2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHZhbC5jb25zdHJ1Y3Rvci5uYW1lID09PSBjbGFzc0lkIHx8ICRtZXRhbW9kZWwuY2hla1NjaGVtYSh2YWwsIGNsYXNzSWQpKSkge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aF0gPSB2YWw7XG4gICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhcnIucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgYXJyRGIucG9wKCk7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoganNoaW50IC1XMTAzICovXG4gICAgYXJyLl9fcHJvdG9fXyA9IG1vbm9jb0FycmF5LnByb3RvdHlwZTtcbiAgICAvKiBqc2hpbnQgK1cxMDMgKi9cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cbm1vbm9jb0FycmF5LnByb3RvdHlwZSA9IG5ldyBBcnJheTtcbi8qIGpzaGludCArVzA1OCAqL1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8wqBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgcHJvcE5hbWVzID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXQoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KG1vZGVsLl9zY2hlbWEpO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdmFyIGJvZHkgPSB7fTtcblxuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXQoY2xhc3NJZCksIHRydWUsIHRydWUpKSB7XG4gICAgICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldChjbGFzc0lkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInIGFyZSBub3QgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgICAgICAvLyBpZFxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuXG4gICAgICAgIC8vIGNsYXNzSW5mb1xuICAgICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcblxuICAgICAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoY2xhc3NJZCwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgY2xhc3NJZCArIFwiIChjb25maWcpIHsgYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGFzc0lkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkIChwcm9wLCB2YWwpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwcm9wLCB2YWwpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKG1vZGVsKTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpKSB7IC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbnVsbCxcbiAgICAgICAgICAgICAgICB2YWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbmV3IG1vbm9jb0FycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJyXCI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ub2NvQXJyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbm9jby5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1wiX2lkXCI6IHRoaXMuaWQoKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bMF0gPSB2YWx1ZS5pZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0cnlpbmcgdG8gZ2V0IHRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgdGhpcy5pZCgpICsgXCInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcIl9pZFwiOiB0aGlzLmlkKCl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIG1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiBldmVudChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudElkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5JbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIGRlc3Ryb3kgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGRldHJveSB0aGUgY2xhc3MgYW5kIGFsbCB0aGUgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkRGVzdHJveUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZERlc3Ryb3lDbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKCk7XG4gICAgICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgICAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgICAgICAgJGRiW2lkXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIHZhciBDbGFzcyA9IHt9LFxuICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgICB9XG5cbiAgICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gICAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICAgIGFkZElkKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZFByb3BlcnRpZXMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRFdmVudHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBwcm9wZXJ0aWVzL21ldGhvZHMgb25seSBpZiB0aGUgY29tcG9uZW50XG4gICAgLy8gaW5oZXJpdCBmcm9tIE1vbm9jb0NvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdNb25vY29Db21wb25lbnQnKSkge1xuICAgICAgICBhZGRPbihDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZERlc3Ryb3lDbGFzcyhDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICAgIHJldHVybiBDbGFzcztcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBGaW5kICBjb21wb25lbnRzIHdpdGggYSBxdWVyeS5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gY29tcG9uZW50cyBmb3VuZFxuICovXG5mdW5jdGlvbiBmaW5kKENsYXNzLCBxdWVyeSkge1xuICAgIHZhciBkb2N1bWVudHMgPSBbXSxcbiAgICBjb21wb25lbnRzID0gW10sXG4gICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwO1xuXG4gICAgaWYgKCRkYltDbGFzc10pIHtcbiAgICAgICAgZG9jdW1lbnRzID0gJGRiW0NsYXNzXS5maW5kKHF1ZXJ5KTtcbiAgICAgICAgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBleHBvcnRzLmdldChkb2N1bWVudHNbaV0uX2lkKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn1cblxuLypcbiAqIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZS5cbiAqIEBtZXRob2QgaXNJbnN0YW5jZU9mXG4gKiBAcGFyYW0ge3R5cGV9IGNvbXBvbmVudCBjb21wb25lbnRcbiAqIEBwYXJhbSB7dHlwZX0gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZSAgXG4gKi9cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50ID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc3RvcmVbaWRdLFxuICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgICAgICAgIFwiX2lkXCI6IGlkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy4gXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBtb25vY28uXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG5cbi8qKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBGaW5kIGNvbXBvbmVudHMgd2l0aCBhIHF1ZXJ5LlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBjb21wb25lbnRzIGZvdW5kXG4gKi9cbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWUuXG4gKiBAbWV0aG9kIGlzSW5zdGFuY2VPZlxuICogQHBhcmFtIHt0eXBlfSBjb21wb25lbnQgY29tcG9uZW50XG4gKiBAcGFyYW0ge3R5cGV9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWUgIFxuICovXG5leHBvcnRzLmlzSW5zdGFuY2VPZiA9IGlzSW5zdGFuY2VPZjtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBkZXN0cm95OyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIG1vbm9jbyBkYXRhYmFzZS4gPGJyPlxuICogbW9ub2NvIGRhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogbW9ub2NvIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIG1vbm9jbyBtZXRhbW9kZWwgYW5kIG1vbm9jbyBjb21wb25lbnRzIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBtb25vY28gZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAY2xhc3MgbW9ub2NvLWRiXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge30sXG5jb2xsZWN0aW9ucyA9IFtdLFxuaW50ZXJuYWxEQiA9IFtcbiAgICAnTW9ub2NvJyxcbiAgICAnTW9ub2NvU2NoZW1hJyxcbiAgICAnTW9ub2NvRXh0ZW5kZWRTY2hlbWEnLFxuICAgICdNb25vY29CZWhhdmlvcicsXG4gICAgJ01vbm9jb1N0YXRlJyxcbiAgICAnTW9ub2NvVHlwZScsXG4gICAgJ01vbm9jb01ldGFtb2RlbCcsXG4gICAgJ01vbm9jb0RhdGFiYXNlJyxcbiAgICAnTW9ub2NvU3lzdGVtJyxcbiAgICAnTW9ub2NvQ2xhc3NJbmZvJyxcbiAgICAnTW9ub2NvTWVzc2FnZScsXG4gICAgJ01vbm9jb0NoYW5uZWwnXG5dO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBUZXN0IGlmIGFuIG9iamVjdCBjb250YWlucyBhbm90aGVyIG9uZS5cbiAqIEBtZXRob2QgY29udGFpbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIG9iamVjdCBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgb3RhcmdldCBiamVjdCBcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNvdXJjZSBvYmplY3QgY29udGFpbnMgdGhlIHRhcmdldCBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgcHJvcGVydHkgPSB7fTtcblxuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGFyZ2V0W3Byb3BlcnR5XSAhPT0gc291cmNlW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKiBcbiAqIEEgY29sbGVjdGlvbiBvZiBkb2N1bWVudHMgbWFuYWdlZCBieSBtb25vY28uIDxicj5cbiAqIEludGVybmFsIGNvbGxlY3Rpb25zIG1hbmFnZSBjb3JlIG9iamVjdHMgb2YgbW9ub2NvIChzY2hlbWEsIHR5cGUsIC4uLikuIDxicj5cbiAqIFB1YmxpYyBjb2xsZWN0aW9ucyBtYW5hZ2UgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy4gPGJyPlxuICogXG4gKiBAY2xhc3MgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG5ldyBjb2xsZWN0aW9uXG4gKi9cbnZhciBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICgkbWV0YW1vZGVsLmdldChuYW1lKSB8fMKgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBzdG9yZVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoW3tcIm5hbWVcIjogXCJyZW5lXCJ9LCB7XCJuYW1lXCI6IFwicm9iZXJ0XCJ9XSk7XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICBpZCA9ICcnLFxuICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX3NlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBJbnNlcnQgYW4gbmV3IGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24uIDxicj5cbiAqIEJlZm9yZSBpbnNlcnRpbmcgdGhlIGRvY3VtZW50LCBtb25vY28gY2hlY2tzIHRoYXQgdGhlIGRvY3VtZW50IGlzIGNvbXBsaWFudFxuICogd2l0aCBpdHMgY2xhc3MgZGVmaW5pdGlvbi4gPGJyPiBcbiAqIFRoZW4sIGFmdGVyIGluc2VydGluZyBpdCwgd2UgY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGluc2VydFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGRvY3VtZW50IGEgbmV3IG9iamVjdCB0byBhZGRcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5pbnNlcnQoezxicj5cbiAqICAgICAgXCJuYW1lXCI6IFwiYm9iXCIsIDxicj5cbiAqICAgICAgXCJmaXJzdE5hbWVcIjogXCJTYWludC1DbGFyXCIsIDxicj5cbiAqICAgICAgXCJhZ2VcIjogNDMgPGJyPlxuICogfSk7IDxicj5cbiAqL1xuTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICB2YXIgZG9jID0gW10sXG4gICAgQ29tcG9uZW50ID0gbnVsbCxcbiAgICByZXN1bHQgPSBbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRvY3VtZW50KSkge1xuICAgICAgICBkb2MgPSBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2MucHVzaChkb2N1bWVudCk7XG4gICAgfVxuXG4gICAgZG9jLmZvckVhY2goZnVuY3Rpb24gbXVsdGlfaW5zZXJ0KG9iaikge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gJ01vbm9jb1NjaGVtYScgfHwgdGhpcy5uYW1lID09PSAnTW9ub2NvVHlwZScgfHwgdGhpcy5uYW1lID09PSAnTW9ub2NvRXh0ZW5kZWRTY2hlbWEnIHx8ICRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0KHRoaXMubmFtZSkpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iai5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb2JqLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yZVt0aGlzLm5hbWVdW29iai5faWRdID0gb2JqO1xuICAgICAgICAgICAgQ29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50LmlkKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpICYmICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykuaW5zZXJ0KHRoaXMubmFtZSwgb2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdNb25vY29NZXNzYWdlJykge1xuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkgJiYgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdjaGFubmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdjaGFubmVsJylbb2JqLmV2ZW50XShvYmouZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQob2JqLCB0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogVXBkYXRlIGRvY3VtZW50cyBpbnRvIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZSB1cGRhdGUgdG8gbWFrZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXG4gKiB7Qm9vbGVhbn0gdXBzZXJ0IHRydWUgaWYgd2UgY3JlYXRlIGEgZG9jdW1lbnQgd2hlbiBubyBkb2N1bWVudCBpcyBmb3VuZCBieSB0aGUgcXVlcnlcbiAqIEByZXR1cm4ge051bWJlcn0gTnVtYmVyIG9mIGRvY3VtZW50cyB1cGRhdGVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy51cGRhdGUoe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0sIHtcInVwc2VydFwiOiB0cnVlfSk7IDxicj5cbiAqL1xuTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAocXVlcnksIHVwZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBkb2NzID0gdGhpcy5maW5kKHF1ZXJ5KSxcbiAgICB1cGRhdGVkID0gMCxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSBkb2NzLmxlbmd0aCxcbiAgICBhdHRyaWJ1dGVOYW1lID0gJycsXG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQodGhpcy5uYW1lKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cHNlcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMudXBzZXJ0ID0gb3B0aW9ucy51cHNlcnQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZSkge1xuXG4gICAgICAgIC8vIHVwc2VydCBjYXNlXG4gICAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgb3B0aW9ucy51cHNlcnQpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeS5faWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuX2lkID0gcXVlcnkuX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnNlcnQodXBkYXRlKTtcbiAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVthdHRyaWJ1dGVOYW1lXSAmJiBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZSAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdID0gdXBkYXRlW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCBzY2hlbWFbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgZG9jdW1lbnQgZnJvbSB0aGUgY29sbGxlY3Rpb24uIDxicj5cbiAqIFdoZW4gYSBkb2N1bWVudCBpcyByZW1vdmVkLCB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHJlbW92ZVxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIHJlbW92ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuQ2Fycy5yZW1vdmUoe1wiY29kZVwiOiBcIkFaRC03MVwifSk7IDxicj5cbiAqICRkYi5DYXJzLnJlbW92ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0pOyA8YnI+XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgaWQgPSAnJyxcbiAgICBjb21wb25lbnQgPSBudWxsLFxuICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfcmVtb3ZlKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhjcml0ZXJpYSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkgJiYgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY291bnRcbiAqIEByZXR1cm4ge051bWJlcn0gbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICovXG5Nb25vY29EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSAwLFxuICAgIG9iamVjdElkID0gJyc7XG4gICAgZm9yIChvYmplY3RJZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBleHBvcnRzW25hbWVdID0gbmV3IE1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn1cblxuXG4vKlxuICogRHVtcCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgICB2YXIgZGJEdW1wID0ge30sXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICBiZWhhdmlvcklkID0gJycsXG4gICAgdHlwZUlkID0gJycsXG4gICAgdHlwZSA9IG51bGwsXG4gICAgYmVoYXZpb3IgPSBudWxsLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgc2NoZW1hSWQgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIGRiRHVtcC5zY2hlbWFzID0ge307XG4gICAgaWYgKGV4cG9ydHMuTW9ub2NvU2NoZW1hLmNvdW50KCkpIHtcbiAgICAgICAgZm9yIChzY2hlbWFJZCBpbiBzdG9yZS5Nb25vY29TY2hlbWEpIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHN0b3JlLk1vbm9jb1NjaGVtYVtzY2hlbWFJZF07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHR5cGVzXG4gICAgZGJEdW1wLnR5cGVzID0ge307XG4gICAgaWYgKGV4cG9ydHMuTW9ub2NvVHlwZS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAodHlwZUlkIGluIHN0b3JlLk1vbm9jb1R5cGUpIHtcbiAgICAgICAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLk1vbm9jb1R5cGVbdHlwZUlkXSkpO1xuICAgICAgICAgICAgZGVsZXRlIHR5cGUuX2lkO1xuICAgICAgICAgICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAudHlwZXNbdHlwZS5uYW1lXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gICAgZm9yIChiZWhhdmlvcklkIGluIHN0b3JlLk1vbm9jb0JlaGF2aW9yKSB7XG4gICAgICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5Nb25vY29CZWhhdmlvcltiZWhhdmlvcklkXSkpO1xuICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICAgIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgICAgICAgIGRiRHVtcC5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSA9IHN0b3JlW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYkR1bXA7XG59XG5cblxuLypcbiAqIEltcG9ydC9FeHBvcnQgYSBtb25vY28gc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2VcbiAqIEBtZXRob2Qgc3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgbW9ub2NvIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBtb25vY28gc3lzdGVtIG9yIHRoZSBpZiBvZiB0aGUgY3VycmVudCBtb25vY28gc3lzdGVtICBcbiAqL1xuZnVuY3Rpb24gc3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLFxuICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgY29tcG9uZW50SWQgPSAnJyxcbiAgICB0eXBlTmFtZSA9ICcnLFxuICAgIHNjaGVtYU5hbWUgPSAnJyxcbiAgICBiZWhhdmlvcklkID0gJycsXG4gICAgc3lzdGVtcyA9IFtdLFxuICAgIGlkID0gbnVsbCxcbiAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gICAgaWYgKGltcG9ydGVkU3lzdGVtKSB7IC8vIGltcG9ydFxuXG4gICAgICAgIC8vIGFkZCB0eXBlc1xuICAgICAgICBmb3IgKHR5cGVOYW1lIGluIGltcG9ydGVkU3lzdGVtLnR5cGVzKSB7XG4gICAgICAgICAgICAkbWV0YW1vZGVsLnR5cGUoaW1wb3J0ZWRTeXN0ZW0udHlwZXNbdHlwZU5hbWVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBzY2hlbWFzXG4gICAgICAgIGZvciAoc2NoZW1hTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5zY2hlbWFzKSB7XG4gICAgICAgICAgICAkbWV0YW1vZGVsLnNjaGVtYShpbXBvcnRlZFN5c3RlbS5zY2hlbWFzW3NjaGVtYU5hbWVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRtZXRhbW9kZWwuY3JlYXRlKCk7XG5cbiAgICAgICAgLy9hZGQgYmVoYXZpb3JzXG4gICAgICAgIGZvciAoYmVoYXZpb3JJZCBpbiBpbXBvcnRlZFN5c3RlbS5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMuTW9ub2NvQmVoYXZpb3IuaW5zZXJ0KGltcG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IGluZm8gaWYgYWxyZWFkeSBhIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuTW9ub2NvU3lzdGVtLmZpbmQoeydtYXN0ZXInOiB0cnVlfSk7XG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCAmJiBzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnNlcnQgdGhlIHN5c3RlbSBpbiBEQlxuICAgICAgICBleHBvcnRzLk1vbm9jb1N5c3RlbS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0pO1xuXG4gICAgICAgIHJlc3VsdCA9IGltcG9ydGVkU3lzdGVtLl9pZDtcblxuICAgIH0gZWxzZSB7IC8vIGV4cG9ydFxuICAgICAgICBleHBvcnRlZFN5c3RlbSA9IGR1bXAoKTtcblxuICAgICAgICAvLyBnZXQgaWQgb2YgdGhlIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuTW9ub2NvU3lzdGVtLmZpbmQoeydtYXN0ZXInOiB0cnVlfSk7XG5cbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgICAgICAgICAgaWQgPSBtYXN0ZXJzeXN0ZW0uX2lkO1xuICAgICAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGV4cG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdO1xuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yLmNvbXBvbmVudCA9IGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0ubmFtZSA9IG1hc3RlcnN5c3RlbS5uYW1lO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIG1vbm9jbyBzdWItc3lzdGVtLlxuICogQG1ldGhvZCBzdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmdpZmllZCBtb25vY28gc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHtcbiAgICB2YXIgc3lzdGVtID0ge30sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgZGVmYXVsdE5hbWUgPSAnJyxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgdHlwZSA9IG51bGwsXG4gICAgYmVoYXZpb3IgPSBudWxsLFxuICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgY2xhc3NOYW1lID0gJyc7XG5cbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIHJlc3VsdCA9IG1vbm9jby5maW5kKCdNb25vY29TeXN0ZW0nLCB7XG4gICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZSgpO1xuICAgIH1cblxuICAgIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gICAgc3lzdGVtLnZlcnNpb24gPSBwYXJhbXMudmVyc2lvbiB8fCAnMC4wLjEnO1xuICAgIHN5c3RlbS5kZXNjcmlwdGlvbiA9IHBhcmFtcy5kZXNjcmlwdGlvbiB8fMKgJyc7XG5cbiAgICBzeXN0ZW0uc3Vic3lzdGVtID0gdHJ1ZTtcblxuICAgIC8vIHNjaGVtYXNcbiAgICBzeXN0ZW0uc2NoZW1hcyA9IHt9O1xuICAgIGlmIChwYXJhbXMuc2NoZW1hcykge1xuICAgICAgICByZXN1bHQgPSBleHBvcnRzLk1vbm9jb1NjaGVtYS5maW5kKHBhcmFtcy5zY2hlbWEpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2NoZW1hID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc2NoZW1hc1tzY2hlbWEuX2lkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHR5cGVzXG4gICAgc3lzdGVtLnR5cGVzID0ge307XG4gICAgaWYgKHBhcmFtcy50eXBlcykge1xuICAgICAgICByZXN1bHQgPSBleHBvcnRzLk1vbm9jb1R5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS50eXBlc1t0eXBlLl9pZF0gPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3JzXG4gICAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JzKSB7XG4gICAgICAgIGJlaGF2aW9yID0gZXhwb3J0cy5Nb25vY29CZWhhdmlvci5maW5kKHBhcmFtcy5iZWhhdmlvcnMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmVoYXZpb3IgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9yLl9pZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBzeXN0ZW0uY29tcG9uZW50cyA9IHt9O1xuICAgIGlmIChwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgICBmb3IgKGNsYXNzTmFtZSBpbiBwYXJhbXMuY29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHNbY2xhc3NOYW1lXSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV0gPSB7fTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGV4cG9ydHNbY2xhc3NOYW1lXS5maW5kKHBhcmFtcy5jb21wb25lbnRzW2NsYXNzTmFtZV0pO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXVtjb21wb25lbnQuX2lkXSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3lzdGVtKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIG1vbm9jbyBkYXRhYmFzZS4gPGJyPlxuICogbW9ub2NvIGRhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogbW9ub2NvIGRhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIG1vbm9jbyBtZXRhbW9kZWwgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IG1vbm9jbyBkYXRhYmFzZSBtdXN0IGJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgYmVpbmcgZmluaXNoZWQsIDxicj5cbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kIDxicj5cbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKiAgIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAY2xhc3MgbW9ub2NvLWRiXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBtb25vY28gZGF0YWJhc2Ugc3RvcmUgdGhhdCBsaXN0IGFsbCB0aGUgY29sbGVjdGlvbnMuXG4gKiBAcHJvcGVydHkge0pTT059IHN0b3JlXG4gKi9cbmV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKipcbiAqIER1bXAgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBkdW1wXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBkdW1wIG9mIHRoZSBkYXRhYmFzZS4gVGhlIGR1bXAgaXMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnM6IDxicj5cbiAqIHtPYmplY3R9IHNjaGVtYXMgdGhlIHNjaGVtYXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IHR5cGVzIHRoZSB0eXBlcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gYmVoYXZpb3JzIHRoZSBiZWhhdmlvcnMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGNvbXBvbmVudHMgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuZHVtcCA9IGR1bXA7XG5cblxuLyoqXG4gKiBJbXBvcnQvRXhwb3J0IGEgbW9ub2NvIHN5c3RlbSBpbnRvL2Zyb20gdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBtb25vY28gc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIG1vbm9jbyBzeXN0ZW0gb3IgdGhlIGN1cnJlbnQgbW9ub2NvIHN5c3RlbSAgXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gc3lzdGVtO1xuXG5cbi8qKlxuICogRXhwb3J0IGEgbW9ub2NvIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIG1vbm9jbyBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZXhwb3J0cy5zdWJzeXN0ZW0gPSBzdWJzeXN0ZW07IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQGNsYXNzIG1vbm9jby1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cbnZhciBtb25vY29SZWYgPSBudWxsO1xuXG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYSBtb25vY28gaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc01vbm9jb1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIG1vbm9jbyBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc01vbm9jbygpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoJGRiLk1vbm9jbyAmJiAkZGIuTW9ub2NvLmZpbmQoKS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIG1vbm9jbyBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0TW9ub2NvXG4gKiBAcmV0dXJuIHtNb25vY299IG1vbm9jbyBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRNb25vY28oKSB7XG4gICAgdmFyIG1vbm9jb0lkID0gJyc7XG5cbiAgICBpZiAoIW1vbm9jb1JlZikge1xuICAgICAgICBpZiAoaXNNb25vY28oKSkge1xuICAgICAgICAgICAgbW9ub2NvSWQgPSAkZGIuTW9ub2NvLmZpbmQoKVswXS5faWQ7XG4gICAgICAgICAgICBtb25vY29SZWYgPSAkY29tcG9uZW50LmdldChtb25vY29JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb25vY29SZWYgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtb25vY286ICcgKyBlcnIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbW9ub2NvOiAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb25vY29SZWY7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIGEgdWlkLlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgdWlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gICAgZnVuY3Rpb24gZ2VuKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICByZXR1cm4gZ2VuKCkgKyBnZW4oKSArIGdlbigpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQGNsYXNzIG1vbm9jby1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogR2V0IG1vbm9jbyBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0TW9ub2NvXG4gKiBAcmV0dXJuIHtNb25vY299IG1vbm9jbyBpbnN0YW5jZVxuICovXG5leHBvcnRzLmdldE1vbm9jbyA9IGdldE1vbm9jbztcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgbW9ub2NvIGluc3RhbmNlIGV4aXN0cy5cbiAqIEBtZXRob2QgaXNNb25vY29cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBtb25vY28gaW5zdGFuY2UgZXhpc3RcbiAqL1xuZXhwb3J0cy5pc01vbm9jbyA9IGlzTW9ub2NvO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSB1aWQ/XG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1aWRcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEBjbGFzcyBtb25vY28tbG9nXG4gKiBAQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCc7XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKHNjaGVtYVtJRF0pIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mIFwiICsgc2NoZW1hW0lEXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgdGhlIG1ldGEgYXR0cmlidXRlIFwiICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKTtcbiAgICB9XG5cbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcobWVzc2FnZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUocHJvcGVydHlOYW1lLCB0eXBlLCBwcm9wZXJ0eSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlOYW1lKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdmFsdWUgZm9yIHRoZSBlbnVtIHZhbHVlICdcIiArIHZhbHVlICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgXCIgKyB0eXBlb2YgdmFsdWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoY29tcG9uZW50SWQsIHR5cGUsIGNvbnN0cnVjdG9yTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NvdXJjZSBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NUb0ltcCB0aGUgY2xhc3MgdG8gaW1wbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdJbXBsZW1lbnRhdGlvbihjbGFzc1NvdXJjZSwgY2xhc3NUb0ltcCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImNsYXNzICdcIiArIGNsYXNzU291cmNlICsgXCInIGlzIG1pc3NpbmcgZm9yIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2xhc3MgJ1wiICsgY2xhc3NUb0ltcCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgc2NoZW1hW0lEXSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRlZiBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZURlZmluaXRpb24oZGVmKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCBsb2FkIHRoZSB0eXBlIGRlZmluaXRpb24gXCIgKyBkZWYpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG5hbWUuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoXCIjXCIpICE9PSAtMSkge1xuICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbmFtZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gcmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5IFwiICsgcHJvcGVydHlOYW1lICsgXCIgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgbW9ub2NvIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkT2JqZWN0T25JbnNlcnQoZG9jLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgZG9jdW1lbnQgXCIgKyBKU09OLnN0cmluZ2lmeShkb2MpICsgXCIgb24gYW4gaW5zZXJ0IG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uIFwiICsgY29sbGVjdGlvbk5hbWUpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgbW9ub2NvIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoXCIjXCIpICE9PSAtMSkge1xuICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uIFwiICsgY29sbGVjdGlvbk5hbWUgKyBcIjogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuLypcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIGNhbGwgYW4gdW5rbm93biBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbmFtZSBmb3IgY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaW4gdGhlIG1ldGFtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgb24gdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua25vd24gY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25Db21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICovXG5mdW5jdGlvbiB1bmtub3duQ29tcG9uZW50KGNsYXNzTmFtZSwgY29tcG9uZW50SWQpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArIGNsYXNzTmFtZSArIFwiJyBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgbW9ub2NvIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKCdtb25vY28gaGFzIGJlZW4gcmVzdGFydGVkJyk7XG59XG5cblxuLypcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoaWQsIG1ldGhvZE5hbWUsIHBhcmFtTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBhZGQgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciBmb3IgdGhlIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gdW5rd293biBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ0aGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHVua25vd25UeXBlKHZhbHVlKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjYW4gbm90IHlldCB2YWxpZGF0ZSBpZiB0aGUgY29tcG9uZW50ICdcIiArIEpTT04uc3RyaW5naWZ5KGlkKSArIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KG1lc3NhZ2UsIGV2ZW50TmFtZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIG1lc3NhZ2UgJ1wiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBmb3IgZXZlbnQgJ1wiICsgZXZlbnROYW1lICsgXCInXCIgKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQGNsYXNzIG1vbm9jby1sb2dcbiAqIEBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSB1bmtub3duUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlO1xuXG5cbi8qKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBpbnZhbGlkRW51bVZhbHVlO1xuXG5cbi8qKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gaW52YWxpZENsYXNzTmFtZTtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gbWlzc2luZ1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzU291cmNlIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1RvSW1wIHRoZSBjbGFzcyB0byBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBtaXNzaW5nSW1wbGVtZW50YXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBpbnZhbGlkVHlwZUltcDtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IG1pc3NpbmdQcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gdW5rbm93blByb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRlZiBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGludmFsaWRUeXBlRGVmaW5pdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gaW52YWxpZFByb3BlcnR5TmFtZTtcblxuXG4vKipcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IHJlYWRPbmx5UHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgbW9ub2NvIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBpbnZhbGlkT2JqZWN0T25JbnNlcnQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgbW9ub2NvIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlID0gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmV4cG9ydHMudW5rbm93bk1ldGhvZCA9IHVua25vd25NZXRob2Q7XG5cblxuLyoqXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBpbnZhbGlkQ29sbGVjdGlvbk5hbWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHJlc3VsdCB0eXBlIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb3QgdGhlIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gaW52YWxpZFJlc3VsdFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gdW5rbm93bkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRoZSBtb25vY28gd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkLlxuICogQG1ldGhvZCB3b3JrZmxvd1Jlc3RhcnRlZFxuICovXG5leHBvcnRzLndvcmtmbG93UmVzdGFydGVkID0gd29ya2Zsb3dSZXN0YXJ0ZWQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyID0gaW52YWxpZFBhcmFtTnVtYmVyO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGludmFsaWRQYXJhbVR5cGU7XG5cblxuLyoqXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBiZWhhdmlvck5vdFVuaXF1ZTtcblxuXG4vKipcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gaW52YWxpZFN0YXRlT247XG5cblxuLyoqXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGludmFsaWRTdGF0ZU9mZjtcblxuXG4vKipcbiAqIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IG1hc3RlclN5c3RlbU5vdEZvdW5kO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGludmFsaWRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSB1bmtub3duVHlwZTtcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBjYW5Ob3RZZXRWYWxpZGF0ZTtcblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGludmFsaWRDaGFubmVsRXZlbnQ7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBtb25vY28gbWV0YW1vZGVsLiA8YnI+XG4gKiBtb25vY28gbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEBjbGFzcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgSUQgPSAnX2lkJyxcbk5BTUUgPSAnX25hbWUnLFxuSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuU0NIRU1BID0gJ19zY2hlbWEnLFxuQ0xBU1MgPSAnX2NsYXNzJyxcbkNPUkUgPSAnX2NvcmUnLFxuRVZFTlRfVFlQRSA9ICdldmVudCcsXG5pbnRlcm5hbFR5cGVzID0gWydwcm9wZXJ0eScsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcsICdldmVudCddLFxuZGVmYXVsdFR5cGVzID0gWydib29sZWFuJywgJ3N0cmluZycsICdudW1iZXInLCAnb2JqZWN0JywgJ2Z1bmN0aW9uJywgJ2FycmF5J10sXG5zdG9yZSA9IHtcbiAgICBtZXRhZGVmOiB7fSxcbiAgICBjYXRhbG9nOiB7fSxcbiAgICBpbmhlcml0YW5jZToge30sXG4gICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICBtb2RlbDoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fSxcbiAgICBpbXBsZW1lbnRhdGlvbjoge31cbn07XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZS5cbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICBmYXRoZXJJZCA9IG51bGwsXG4gICAgbmV3SWQgPSBudWxsO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW2lkXTtcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChmYXRoZXJJZCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5wdXNoKGZhdGhlcklkKTtcbiAgICAgICAgICAgIG5ld0lkID0gZmF0aGVySWQ7XG4gICAgICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW25ld0lkXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudC5cbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge3R5cGV9IGlkIGlkIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJuIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQoaWQpIHtcbiAgICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgc29uID0gc3RvcmUuY2F0YWxvZ1tpZF0sXG4gICAgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIGFuY2VzdG9yID0gbnVsbCxcbiAgICBwcm9wID0gJyc7XG5cbiAgICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgICAgIGxlbmd0aCA9IGFuY2VzdG9ycy5sZW5ndGg7XG4gICAgICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhbmNlc3RvciA9IHN0b3JlLmNhdGFsb2dbYW5jZXN0b3JzW2ldXTtcbiAgICAgICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IHNvbltwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuXG4vKlxuICogQWRkIHRoZSBtb2RlbHMuXG4gKiBAbWV0aG9kIGNyZWF0ZU1vZGVsXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVNb2RlbCgpIHtcbiAgICB2YXIgaWQgPSAnJztcbiAgICBmb3IgKGlkIGluIHN0b3JlLmNhdGFsb2cpIHtcbiAgICAgICAgc3RvcmUubW9kZWxbaWRdID0gZXh0ZW5kKGlkKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYWxsIHRoZSBzY2hlbWEgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzLlxuICogQG1ldGhvZCBjaGVja0ltcGxlbWVudGF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0ltcGxlbWVudGF0aW9uKCkge1xuICAgIHZhciBpZCA9ICcnLFxuICAgIGNsYXNzRGVmID0gbnVsbCxcbiAgICBjbGFzc0ltcCA9ICcnO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBjbGFzc0RlZiA9IHN0b3JlLm1vZGVsW2lkXTtcbiAgICAgICAgaWYgKGNsYXNzRGVmICYmIHR5cGVvZiBjbGFzc0RlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2xhc3NJbXAgPSBzdG9yZS5tb2RlbFtjbGFzc0RlZltTQ0hFTUFdXTtcbiAgICAgICAgICAgIGlmIChjbGFzc0ltcCkge1xuICAgICAgICAgICAgICAgIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCk7XG4gICAgICAgICAgICAgICAgc3RvcmUuaW1wbGVtZW50YXRpb25bY2xhc3NEZWZbSURdXSA9IGNsYXNzSW1wW0lEXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nSW1wbGVtZW50YXRpb24oY2xhc3NEZWZbU0NIRU1BXSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hLlxuICogQG1ldGhvZCBjaGVja1N0YXRlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTdGF0ZXMoKSB7XG4gICAgdmFyIGlkID0gJycsXG4gICAgY2xhc3NEZWYgPSBudWxsLFxuICAgIHR5cGUgPSAnJyxcbiAgICBzdGF0ZXMgPSBbXSxcbiAgICBhdHRyaWJ1dGUgPSAnJztcblxuICAgIGZvciAoaWQgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgc3RhdGVzID0gW107XG4gICAgICAgIGNsYXNzRGVmID0gc3RvcmUubW9kZWxbaWRdO1xuICAgICAgICBpZiAoY2xhc3NEZWYgJiYgdHlwZW9mIGNsYXNzRGVmW1NDSEVNQV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBjbGFzc0RlZikge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBjbGFzc0RlZlthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuaW5kZXhPZignXycpICE9PSAwICYmIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuc3RhdGVzW2lkXSA9IHN0YXRlcztcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3QgXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gICAgdmFyIHByb3BlcnR5ID0gJycsXG4gICAgdmFsdWUgPSBudWxsO1xuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTY2hlbWEodmFsdWUsIGNsYXNzSW1wW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVyZVxuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NJbXBbcHJvcGVydHldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrU2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtPYmplY3R9IHR5cGUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTY2hlbWEodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoaGFzVHlwZSh0eXBlLCAnc3RyaW5nJykgJiYgZGVmYXVsdFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyBjb3JyZWN0IGN1c3RvbSB0eXBlLlxuICogQG1ldGhvZCBjaGVja0N1c3RvbVNjaGVtYVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBpZiAoIWhhc1R5cGUodHlwZURlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAodHlwZURlZi50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBEYXRhYmFzZSBzdHVjdHVyZS5cbiAqIEBtZXRob2QgaW5pdERiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0RGJTdHJ1Y3R1cmUoKSB7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb1NjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29FeHRlbmRlZFNjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29DbGFzc0luZm8nKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvQmVoYXZpb3InKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvU3RhdGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvVHlwZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29NZXNzYWdlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb0NoYW5uZWwnKTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uKS5cbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICBtb2RlbERlZiA9IHt9LFxuICAgIHR5cGVOYW1lID0gJyc7XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5jYXRhbG9nKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuY2F0YWxvZ1ttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuTW9ub2NvU2NoZW1hLmluc2VydChtb2RlbERlZik7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mICRkYlttb2RlbERlZltJRF1dID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltJRF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5tb2RlbFttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuTW9ub2NvRXh0ZW5kZWRTY2hlbWEuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG5cbiAgICBmb3IgKHR5cGVOYW1lIGluIHN0b3JlLnR5cGUpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgICAgICAgbW9kZWxEZWYuX2lkID0gbW9kZWxEZWYubmFtZTtcbiAgICAgICAgJGRiLk1vbm9jb1R5cGUuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGNvbXBvbmVudC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIGFsbCB0aGUgQ2xhc3NJbmZvIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NJbmZvXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0luZm8oKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGRiLk1vbm9jb0NsYXNzSW5mby5pbnNlcnQoe1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IG1vZGVsRGVmLl9pZCArICdJbmZvJyxcbiAgICAgICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBzdG9yZS5tb2RlbFttb2RlbERlZltTQ0hFTUFdXSxcbiAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0IC8gdHlwZS5cbiAqIEBtZXRob2QgZ2V0UmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSAmJlxuICAgIGRlZmF1bHRUeXBlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAhaXNSZWZlcmVuY2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgcmVmZXJlbmNlLlxuICogQG1ldGhvZCBpc1JlZmVyZW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZignQCcpICE9PSAtMTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZS5cbiAqIEBtZXRob2QgZ2V0VHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSB0eXBlIG9mIHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gJyc7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdC5cbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG9iaikge1xuICAgIHJldHVybiBvYmouY29uc3RydWN0b3IubmFtZTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBlbnVtVmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtVmFsdWUodmFsdWUsIGVudW1WYWx1ZSkge1xuICAgIHJldHVybiBlbnVtVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcGFyYW0ge3R5cGV9IHR5cGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlzIHZhbHVlIGhhcyB0eXBlICd0eXBlJ1xuICovXG5mdW5jdGlvbiBoYXNUeXBlKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgcmVzdWx0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlc3VsdCA9ICh0eXBlID09PSB0eXBlb2YgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgc2NoZW1hIHRvIGFkZFxuICovXG5mdW5jdGlvbiBzY2hlbWEoaW1wb3J0ZWRTY2hlbWEpIHtcbiAgICB2YXIgaWQgPSBpbXBvcnRlZFNjaGVtYVtJRF0sXG4gICAgaW5oZXJpdCA9IGltcG9ydGVkU2NoZW1hW0lOSEVSSVRTXSxcbiAgICBuYW1lID0gaW1wb3J0ZWRTY2hlbWFbTkFNRV0sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIC8vIGlmIG5vIGlkLCBpdCB3aWxsIGJlIHRoZSBuYW1lIGJ5IGRlZmF1bHRcbiAgICBpZiAoaGFzVHlwZShpZCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlkID0gbmFtZTtcbiAgICAgICAgaW1wb3J0ZWRTY2hlbWFbSURdID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkU2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG5cbiAgICAgICAgc3RvcmUuY2F0YWxvZ1tpZF0gPSBpbXBvcnRlZFNjaGVtYTtcbiAgICAgICAgaWYgKGluaGVyaXQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGluaGVyaXQubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaWRdID0gaW5oZXJpdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBzY2hlbWEgJ1wiICsgSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRTY2hlbWEpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlXG4gKi9cbmZ1bmN0aW9uIHR5cGUoaW1wb3J0ZWRUeXBlKSB7XG4gICAgdmFyIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgc3RvcmUudHlwZVtuYW1lXSA9IGltcG9ydGVkVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKGltcG9ydGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0aGUgdHlwZSAnXCIgKyBKU09OLnN0cmluZ2lmeShpbXBvcnRlZFR5cGUpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBzdG9yZS5tZXRhZGVmID0ge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgY2F0YWxvZzoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgbW9kZWw6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fSxcbiAgICAgICAgaW1wbGVtZW50YXRpb246IHt9XG4gICAgfTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gICAgY3JlYXRlTW9kZWwoKTtcbiAgICBjaGVja0ltcGxlbWVudGF0aW9uKCk7XG4gICAgY2hlY2tTdGF0ZXMoKTtcbiAgICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUNsYXNzKCk7XG4gICAgY3JlYXRlQ2xhc3NJbmZvKCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbaWRdLFxuICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtpZF0sXG4gICAgc3RhdGUgPSB7fTtcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbSURdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKHZhbHVlKSAhPT0gdHlwZVJlZikge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZSh2YWx1ZS5pZCgpLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVOYW1lLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIGVudW0gdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoaXNSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9ICRjb21wb25lbnQuaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVmZXJlbmNlKHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgIGZpZWxkID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlLFxuICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgIHR5cGVSZWYgPSAnJyxcbiAgICByZWFsVHlwZSA9ICcnLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgZW51bVZhbHVlID0gW107XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZCwgdHlwZVJlZiwgZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWZcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qob2JqZWN0LCBzY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgZmllbGQgPSBudWxsLFxuICAgIHJlc3VsdCA9IHRydWUsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgdHlwZVJlZiA9ICcnLFxuICAgIHJlYWxUeXBlID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1R5cGUoY2xlYW5SZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBzdHJpY3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSBjdXN0b20gdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIGN1c3RvbSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICB0eXBlU2NoZW1hID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICAgICAgaWYgKHR5cGVTY2hlbWEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hLnNjaGVtYSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hLnNjaGVtYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKCkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgIGNvbXAgPSBudWxsLFxuICAgICAgICBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5pZCkge1xuICAgICAgICAgICAgY29tcCA9IGZpZWxkO1xuICAgICAgICAgICAgaXNDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzVHlwZShjb21wLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcCkgIT09IHR5cGVSZWYpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkZWZhdWx0IHZhbHVlIG9mIGFuIG9iamVjdCAoe30gb3IgbnVsbClcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSAmJiBmaWVsZCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoKTpcbiAgICAgICAgICAgICAgICBjYXNlIGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTpcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgdHlwZUFycmF5ID0gJyc7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBnZXRUeXBlKHR5cGVTY2hlbWEpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGQpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkKSAhPT0gdHlwZVNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFycmF5ID0gdHlwZVNjaGVtYVswXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlQXJyYXldLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZFtpXSkgIT09IHR5cGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkW2ldLCB0eXBlQXJyYXksIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGRbaV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzZSBvZiBhbiBpbXBvcnQgb2YgYSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSAhPT0gZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENsYXNzTmFtZShmaWVsZFtpXSkgIT09IGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCAnYXJyYXknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25UeXBlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU9iamVjdChvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICBmaWVsZCA9IG51bGwsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICBkZWZhdWx0VmFsdWUgPSAnJztcblxuICAgIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAoc3RvcmUubW9kZWxbaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IHN0b3JlLm1vZGVsW2lkXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHBhcmVudHMgb2YgYSBzaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge0FycmF5fSBpZCBvZiB0aGUgcGFyZW50c1xuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIG1vZGVsID0gbnVsbDtcblxuICAgIG1vZGVsID0gc3RvcmUubW9kZWxbaWRdO1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgICByZXN1bHQgPSBtb2RlbFtJTkhFUklUU107XG4gICAgfVxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICAgIC8qXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAgICogQG1ldGhvZCBfc2VhcmNoUGFyZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2VhcmNoUGFyZW50KGNsYXNzTmFtZSwgYW5jZXN0b3JOYW1lKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2UsXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBpc0FuY2VzdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIGFuY2VzdG9yTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBbmNlc3RvcjtcbiAgICB9XG5cbiAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhuYW1lKTtcbiAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihwYXJlbnROYW1lKSAhPT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgcGFyZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgbW9ub2NvIG1ldGFtb2RlbC4gPGJyPlxuICogbW9ub2NvIG1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLXdvcmtmbG93XG4gKiBAY2xhc3MgbW9ub2NvLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHNjaGVtYS5cbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAbWV0aG9kIHNjaGVtYVxuICovXG5leHBvcnRzLnNjaGVtYSA9IHNjaGVtYTtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQHBhcmFtIHtKU09OfSB0eXBlXG4gKiBAbWV0aG9kIHR5cGVcbiAqL1xuZXhwb3J0cy50eXBlID0gdHlwZTtcblxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRQYXJlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmV4cG9ydHMuZ2V0UGFyZW50cyA9IGdldFBhcmVudHM7XG5cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gaW5oZXJpdEZyb207XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuXG5cbi8qKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5wcmVwYXJlT2JqZWN0ID0gcHJlcGFyZU9iamVjdDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5leHBvcnRzLmlzVmFsaWRUeXBlID0gaXNWYWxpZFR5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gaXNWYWxpZEVudW07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gaXNWYWxpZFN0YXRlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGlzRXZlbnQ7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBtb25vY28uIDxicj5cbiAqIEl0IGluaXRzIG1vbm9jbyBtZXRhbW9kZWwgYW5kIGxvYWRzIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbnN5c3RlbSA9ICcnO1xuXG5cbi8qIEluaXQgTWV0YW1vZGVsICovXG5cblxuJG1ldGFtb2RlbC5pbml0KCk7XG5cblxuLyogSW5pdCBtb25vY28gZnJvbSBhICBzeXN0ZW0gKi9cblxuXG5zeXRlbUlkID0gJGRiLnN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5zeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXRlbUlkKTtcbnN5c3RlbS5tYWluKCk7XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIG1vbm9jby4gPGJyPlxuICogSXQgaW5pdHMgbW9ub2NvIG1ldGFtb2RlbCBhbmQgbG9hZHMgbW9ub2NvIGNvcmUgc3lzdGVtLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLXN5c3RlbVxuICogQG1haW4gbW9ub2NvXG4gKiBAY2xhc3MgbW9ub2NvXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIG1vbm9jbyBpbnN0YW5jZS5cbiAqIEBwcm9wZXJ0eSBtb25vY29cbiAqIEB0eXBlIE1vbm9jb1xuICovXG5tb2R1bGUuZXhwb3J0cyA9ICRjb21wb25lbnQuZ2V0KCdtb25vY28nKTsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQGNsYXNzIG1vbm9jby1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXQoaWQsIHN0YXRlKSB7XG4gICAgc3RvcmVbaWRdID0gc3RhdGU7XG4gICAgJGRiLnN0b3JlLk1vbm9jb1N0YXRlW2lkXSA9IHtcIm5hbWVcIjogc3RhdGV9O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGUgY29tcG9uZW50cy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAY2xhc3MgbW9ub2NvLXN0YXRlXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuc2V0ID0gc2V0O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0IFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyOyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSB3b3JrZmxvdyBvZiBtb25vY28uIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgbW9ub2NvLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tY2hhbm5lbFxuICogQHJlcXVpcmVzIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAY2xhc3MgbW9ub2NvLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkY2hhbm5lbCA9IHJlcXVpcmUoJy4vY2hhbm5lbC5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLyoqXG4gKiBUaGUgTW9ub2NvRXJyb3IgY2xhc3MuXG4gKiBAY2xhc3MgTW9ub2NvRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqL1xuZnVuY3Rpb24gTW9ub2NvRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5uYW1lID0gXCJNb25vY29FcnJvclwiO1xufVxuTW9ub2NvRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5Nb25vY29FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb25vY29FcnJvcjtcblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBtZXRob2QgZm9yIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIG1pbiA9IDAsXG4gICAgbWF4ID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtaW4pO1xuICAgICAgICByZXN1bHQucHVzaChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2Qgc2V0RGVmYXVsdFZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZShpZCwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IGZhbHNlICYmIHR5cGVvZiBhcmdzW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSB0eXBlIHJldHVybmVkIGJ5IGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRSZXR1cm5UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciByZXN1bHRUeXBlID0gbnVsbCxcbiAgICByZXN1bHQgPSBudWxsO1xuXG4gICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5yZXN1bHQ7XG4gICAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQG1ldGhvZCBnZXRQYXJhbVR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtVHlwZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8wqAnJyxcbiAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0IHx8IHVuZGVmaW5lZCxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocmV0dXJuVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kUmVzdWx0ICE9PSByZXR1cm5UeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGF0ZVxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IGEgbW9ub2NvIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgdGhlIGFjdGlvbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9ICRiZWhhdmlvci5nZXRBY3Rpb25zKGNvbXBvbmVudC5pZCgpLCBuYW1lKSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBwYXJlbnQgPSBudWxsO1xuXG4gICAgaWYgKCFhY3Rpb24ubGVuZ3RoIHx8IGlzRXZlbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMoJGNvbXBvbmVudC5nZXQoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpLCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRzID0gJG1ldGFtb2RlbC5nZXRQYXJlbnRzKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIGFjdGlvbiBhbmQgbWFrZSBzb21lIERlcGVuZGVuY3kgSW5qZWN0aW9uIGlmIGl0IGlzIGEgY29yZSBhY3Rpb25cbiAqIEBtZXRob2QgY2FsbEFjdGlvblxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgaXMgdGhlIGFjdGlvbiBhIGNhbGxiYWNrIG9mIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBjYWxsQWN0aW9uKGNvbXBvbmVudCwgc3RhdGUsIGFjdGlvbiwgcGFyYW1zLCBpc0V2ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgaW5qZWN0ZWRQYXJhbXMgPSBbXSxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwO1xuXG4gICAgcGFyYW1zID0gc2V0RGVmYXVsdFZhbHVlKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLCBzdGF0ZSwgcGFyYW1zKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChhY3Rpb24uY29yZSkge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2gocGFyYW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGxvZyk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjaGFubmVsKTtcblxuICAgICAgICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShhY3Rpb24uYWN0aW9uLCBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpKSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICAgICAgICAgc2V0VGltZW91dChhY3Rpb24uYWN0aW9uLmJpbmQuYXBwbHkoYWN0aW9uLmFjdGlvbiwgW2NvbXBvbmVudF0uY29uY2F0KHBhcmFtcykpLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb25vY29FcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmdldE1vbm9jbygpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcImVycm9yIHdoZW4gd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGFyYW1zKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8wqAnJyxcbiAgICBhcmdzID0gcGFyYW1zLmFyZ3MgfHzCoCcnLFxuICAgIHBhcmFtc05hbWUgPSBbXSxcbiAgICBwYXJhbXNUeXBlID0gW10sXG4gICAgcGFyYW1zTnVtYmVyID0gW10sXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgbGVuZ3RoID0gYXJncy5sZW5ndGgsXG4gICAgaSA9IDAsXG4gICAgcGFyYW0gPSBudWxsLFxuICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICBwYXJhbXNUeXBlID0gZ2V0UGFyYW1UeXBlcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICAvLyBjYXNlIG9mIG9iamVjdFxuICAgIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZW5ndGggPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNOdW1iZXIuaW5kZXhPZihsZW5ndGgpID09PSAtMSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUpO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJhbSA9IGFyZ3NbaV07XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaSA8IHBhcmFtc051bWJlclswXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZFR5cGUocGFyYW0sIHBhcmFtc1R5cGVbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1UeXBlKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lLCBwYXJhbXNOYW1lW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFuIGFjdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgbm90IGFuIG9mIGV2ZW50LCBjaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gc3RhdGUocGFyYW1zKSB7XG5cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgcGFyYW1zLmNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgJyc7XG4gICAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuICAgIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG5cbiAgICB2YXIgY29tcG9uZW50ID0gbnVsbCxcbiAgICBjdXJyZW50U3RhdGUgPSAnJyxcbiAgICBhY3Rpb25zID0gW10sXG4gICAgYWN0aW9uID0gbnVsbCxcbiAgICByZXN1bHQgPSBudWxsLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaXNFdmVudCA9IGZhbHNlO1xuXG4gICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldChwYXJhbXMuY29tcG9uZW50KTtcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09ICdkZXN0cm95Jykge1xuXG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgYWN0aW9ucyA9IGdldEFjdGlvbnMoY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGlzRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1BhcmFtcyh7XG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IHBhcmFtcy5kYXRhXG4gICAgICAgICAgICB9KSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kUmVzdWx0XCI6IHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBleHBvcnRzLnN0b3Aoe1xuICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidHJ5aW5nIHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArIHBhcmFtcy5jb21wb25lbnQgKyBcIidcIlxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLypcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmZ1bmN0aW9uIHN0b3AocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmFtcy5lcnJvciA9IGZhbHNlO1xuICAgIH1cbiAgICBwYXJhbXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8ICcnO1xuXG4gICAgZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy5lcnJvcikge1xuICAgICAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNb25vY29FcnJvcihcIm1vbm9jbyBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgXCIgKyBwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9ub2NvRXJyb3IoXCJtb25vY28gaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIG9mIGFuIHVua25vd24gZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ21vbm9jbzogbW9ub2NvIGhhcyBiZWVuIHN0b3BwZWQnKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgZXhwb3J0cy5zdGF0ZSA9IHN0YXRlO1xuICAgICRsb2cud29ya2Zsb3dSZXN0YXJ0ZWQoKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSB3b3JrZmxvdyBvZiBtb25vY28uIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgbW9ub2NvLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tY2hhbm5lbFxuICogQHJlcXVpcmVzIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAY2xhc3MgbW9ub2NvLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogXG4gKiBXb3JrbG93Ojxicj5cbiAqIDxicj5cbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZCA8YnI+XG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2Qgb3IgYW4gZXZlbnQgPGJyPlxuICogMi4gU2VhcmNoIGlmIHRoZXJlIGlzIGEgYmVoYXZpb3Igd2l0aCBhbiBhY3Rpb24gZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIG5vdCBhbiBvZiBldmVudCwgY2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcblxuXG4vKipcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG5cblxuLyoqXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5leHBvcnRzLnJlc3RhcnQgPSByZXN0YXJ0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBjaGVja1BhcmFtczsiXX0=
