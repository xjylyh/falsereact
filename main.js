var component = window._react_ = {
    root:document.getElementById('root'),
    template:'<div onclick="_react_.changeName()">{name} love js {age}</div>',
    data:{// react -> getInitialState; vue -> data
        name:'jiyao',
        age:20
    },
    render:function(){// react -> render; vue -> <template />
        var _t = this;
        var html = _t.template.replace(/\{.*?\}/g,function(res){
            console.log(res);
            var key = res.substr(1,res.length-2);
            return _t.data[key];
        })
        _t.root.innerHTML = html;
    },
    setData:function(o){// react -> setState; vue -> 劫持对象的getter和setter
        var _t=this;
        for(var key in o){
            _t.data[key] = o[key];
        }
        _t.render();
    },
    start:function(){// react -> React.createClass; vue -> new Vue
        var _t = this;
        _t.render();
        _t.ready();
    },
    ready:function(){// react -> componentDidMount; vue -> ready(1.x)\mounted(2.x)
        var _t = this;
        console.log('component is ready->componentDidmount')
        setTimeout(()=>{
            _t.setData({
                'name':'xiejiyao',
                'age':23
            });
        },6000)
    },
    changeName:function(){// react -> changeName; vue -> methods.changeName
        var _t = this;
        _t.setData({
            'name':'developer',
            'age':'25'
        })
    }
}
component.start();

//上面的注释是理解。有了对react和vue组件化开发方式的一点点理解