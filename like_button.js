var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = antd.Tree;
var TreeNode = Tree.TreeNode;

var treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [{ title: '0-0-0-0', key: '0-0-0-0' }, { title: '0-0-0-1', key: '0-0-0-1' }, { title: '0-0-0-2', key: '0-0-0-2' }]
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [{ title: '0-0-1-0', key: '0-0-1-0' }, { title: '0-0-1-1', key: '0-0-1-1' }, { title: '0-0-1-2', key: '0-0-1-2' }]
  }, {
    title: '0-0-2',
    key: '0-0-2'
  }]
}, {
  title: '0-1',
  key: '0-1',
  children: [{ title: '0-1-0-0', key: '0-1-0-0' }, { title: '0-1-0-1', key: '0-1-0-1' }, { title: '0-1-0-2', key: '0-1-0-2' }]
}, {
  title: '0-2',
  key: '0-2'
}];

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: []
    }, _this.onExpand = function (expandedKeys) {
      console.log('onExpand', expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    }, _this.onCheck = function (checkedKeys) {
      console.log('onCheck', checkedKeys);
      _this.setState({ checkedKeys: checkedKeys });
    }, _this.onSelect = function (selectedKeys, info) {
      console.log('onSelect', info);
      _this.setState({ selectedKeys: selectedKeys });
    }, _this.renderTreeNodes = function (data) {
      return data.map(function (item) {
        if (item.children) {
          return React.createElement(
            TreeNode,
            { title: item.title, key: item.key, dataRef: item },
            _this.renderTreeNodes(item.children)
          );
        }
        return React.createElement(TreeNode, Object.assign({ key: item.key }, item));
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Tree,
        {
          checkable: true,
          onExpand: this.onExpand,
          expandedKeys: this.state.expandedKeys,
          autoExpandParent: this.state.autoExpandParent,
          onCheck: this.onCheck,
          checkedKeys: this.state.checkedKeys,
          onSelect: this.onSelect,
          selectedKeys: this.state.selectedKeys
        },
        this.renderTreeNodes(treeData)
      );
    }
  }]);

  return Demo;
}(React.Component);

ReactDOM.render(React.createElement(Demo, null), document.querySelector('#like_button_container'));