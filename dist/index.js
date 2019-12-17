'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var FedaPayCheckoutComponent = /** @class */ (function (_super) {
    __extends(FedaPayCheckoutComponent, _super);
    function FedaPayCheckoutComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FedaPayCheckoutComponent.prototype.componentDidMount = function () {
        if (typeof window['FedaPay'] === 'undefined') {
            console.error('checkout.js script need to be included!');
        }
        else {
            try {
                this.initFedaPay();
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    FedaPayCheckoutComponent.prototype.initFedaPay = function () {
        var FedaPay = window['FedaPay'];
        if (this.props.children instanceof Array || !this.props.children) {
            console.error('Exactly one Element should be included as FedaPayCheckoutComponent child !');
        }
        else {
            this.childElement = this.props.children;
            if (!this.childElement.props.id) {
                throw new Error('The child Element should have an id');
            }
            var childElementId = "#" + this.childElement.props.id;
            if (this.props.embeded) {
                this.props.fedaCheckoutOptions.container = childElementId;
                FedaPay.init(this.props.fedaCheckoutOptions);
            }
            else {
                FedaPay.init(childElementId, this.props.fedaCheckoutOptions);
            }
        }
    };
    FedaPayCheckoutComponent.prototype.render = function () {
        return (this.props.children);
    };
    return FedaPayCheckoutComponent;
}(React.Component));

exports.default = FedaPayCheckoutComponent;
//# sourceMappingURL=index.js.map
