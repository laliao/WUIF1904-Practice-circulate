window.onload = function() {
    //通过js模拟数据保存在localstorage中， 通过各种方式去操作这个数据进行可编辑表格；本地存储保存的是字符串，所以使用JSON.stringify()将数据转为字符串
    //查： 通过localstorage.getItem() 获取数据， 进行展示；拿到的数据是一段字符串，所以使用JSON.parse()转为数据，使用模板字符串``，绑定数据${}进行渲染，让浏览器可操作读取，之后使用jquery的html()方法放到tbody中
    //删： 点击删除按钮删除对应的一行。 所以每一行都需要一个独特的标记， 根据这个标记与数据进行对比， 对比成功删除数据中的对应部分。给每一行的tr标签添加一个id属性，数据的下标都是唯一的，所以可以使用小标作为id的属性值进行区分。在点击的时候拿到id的属性值，作为数据的下标进行删除。parents(选择器)，attr("属性名")
    //改： 点击对应要修改的内容确定要修改的那一行， 然后再与数据进行对比， 去修改数据中的对应行。修改需要输入文本，所以展示数据的地方需要使用input输入框，name属性可以保存我们修改的键名。在点击input失去焦点的时候获取到修改后的内容以及键名，根据tr的id属性来修改对应数据的内容。val()获取value值，parents(选择器)，attr("属性名")，$.each()
    //增： 点击添加按钮在页面中插入新的一行， 然年再添加完数据之后再进行保存到本地。点击添加按钮在body的最后添加一行，tr同样需要添加id属性，将newData的数组长度作为新的一行的id属性值。需要一行新的数据，数据中不保存任何东西，在我们将新增一行的内容进行修改之后再添加，添加完成之后，将newData重新保存在本地



    //设置数据，添加至浏览器界面中
    //模拟数据，数据一般保存在数组中，方便进行循环遍历的操作
    //获取本地存储的数据，并且通过js进行渲染
    //通过字符串的拼接将要显示的内容放在一个字符串中（+=），再插入到父元素中
    let data = [{
            name: "小一",
            sex: "男",
            age: "19",
            work: "学生",
            hobby: "学习",
        }, {
            name: "小二",
            sex: "女",
            age: "18",
            work: "学生",
            hobby: "旅游",
        }, {
            name: "大三",
            sex: "男",
            age: "22",
            work: "程序员",
            hobby: "运动",
        }, {
            name: "小四",
            sex: "男",
            age: "23",
            work: "学生",
            hobby: "打篮球",
        }, {
            name: "小五",
            sex: "女",
            age: "19",
            work: "老师",
            hobby: "手工品",
        }]
        //localStorage.setItem()设置本地存储
        // localStorage.setItem("person", JSON.stringify(data)) //设置本地存储（"键名"，"值"）；对象需要转化为字符串才可以进行存储
    let newData
        //localStorage.getItem()将本地的数据读取出来
    newData = JSON.parse(localStorage.getItem("person")) //获取本地数据，获得的是一个字符串，需要一条一条的显示，将其转为对象方便显示和遍历
    console.log(newData)
    let str = ''
        //将newData中的每一条数据进行渲染，需要使用遍历$.each(被遍历的对象，回调函数)
    $.each(newData, (i, value) => { //遍历newDta,将其里面的元素按照html格式放在str中,然后保存到html文件中，让浏览器读取
            //tr,td标签的拼接；使用es6的模板字符串，方便数据绑定
            str += `               
            <tr class="info" id=${i}>
                <td>
                    <input  type="text" value="${value.name}" name="name" />
                </td>    
                <td>
                    <input type="text" value="${value.sex}" name="sex"/>
                </td>
                <td>
                    <input type="text" value="${value.age}" name="age"/>
                </td>
                <td>
                    <input type="text" value="${value.work}" name="work"/>
                </td>
                <td>
                    <input type="text" value="${value.hobby}" name="hobby"/>
                </td>
                <td>
                    <button type="button" class="btn btn-primary">删除</button>
                </td>
            </tr>
            `
        })
        // console.log(str)
    $("tbody").html(str) //将拼接好的str放在tbody中；html中就新增了内容，浏览器可显示；html(),覆盖，数据更新不会存在原数据滞留；增





    // //删
    // //删除一条数据，根据每一行的唯一的id标记来进行删除 
    // //将下标作为tr的id属性值来区分每一行，使用数组中的splice方法删除newData中的任意一个元素，删除后将newData重新存储到本地中，实现数据更新
    $(".table button").on("click", function() {
        let id = $(this).parents("tr").attr("id") //this是一个指向，在jquery中，加$(),才能转为jquery对象，才可以使用jquery身上的方法；attr("属性名")获取属性名对应的值；parents("标签/类")获取所有父元素中标签是""的
        newData.splice(id, 1) //删除
            // console.log(newData)   //删除后在console控制台上是显示删除后的，local中的存储没删除，需要重新设置
        localStorage.setItem("person", JSON.stringify(newData)) //重新设置本地数据,上面的数据属性名设置的是person
        location.reload() //删除后重新加载页面，从上到下执行，会获取数据显示
    })




    //改，
    //可以进行文本的输入，所以需要input,布局进行修改，需要知道当前修改的是当前数据的哪一条，哪一个属性；
    //所以我们需要唯一的标识和标记属性的方法，在input身上有一个name属性可以帮助我们保存当前的操作

    //给input的父级元素添加点击事件，但是监听input的点击，以此来实现给多个元素添加同一个事件的效果（类似于原生js的事件委派）
    //将this转为jquery对象并且添加失去焦点事件
    //在input失去焦点之后需要保存下修改后的value值和当前修改的行id以及修改的属性的属性名（name）
    //通过遍历newData找到当前正在修改的那一条数据，修改数值为获取到的值
    //将跟新后的数据重新保存到本地，重新加载页面

    $("table").on("focus", "input", function() {
        //在input失去焦点以后表示修改完成，保存修改后的内容和键名
        $(this).on("blur", function() {
            let va = $(this).val() //获取更改后的值；val()获取值
            let id = $(this).parents("tr").attr("id") //获取此input对应的行id
            let key = $(this).attr("name") //获取修改的input的name属性值
            $.each(newData, (i, v) => { //通过对newData遍历，找到修改的行和属性名进行修改
                if (i == id) {
                    v[key] = va
                }
            })

            localStorage.setItem("person", JSON.stringify(newData))
            location.reload()
        })
    })






    //增  
    //点击添加按钮，在页面最后添加一行空的
    //创建一个空对象，存储新增的内容
    //将新建的对象放入到newDta的最后，插入一行新内容，将其放到tbody的最后，用append()
    $(".box>button").on("click", function() {
        //需要在浏览器上显示一行空的表格，就需要承接html样式的字符串，str用模板字符串，添加到html中，浏览器可显示
        //id=下标，在数组newData最后添加的内容的下标是newData.length
        str = `
            <tr class="info" id=${newData.length}>   
            <td>
                <input  type="text" value="" name="name" />
            </td>    
            <td>
                <input type="text" value="" name="sex"/>
            </td>
            <td>
                <input type="text" value="" name="age"/>
            </td>
            <td>
                <input type="text" value="" name="work"/>
            </td>
            <td>
                <input type="text" value="" name="hobby"/>
            </td>
            <td>
                <button type="button" class="btn btn-primary">删除</button>
            </td>
        </tr>
            `
            //str可以使一行表格的框架显示出来，但是其里面是没有内容的，本地存储也没有内容，不能获取，value无值，需要自己设置，才算是完整的一行内容
        let obj = {
            name: '',
            sex: '',
            age: '',
            work: "",
            hobby: "",
        }
        newData.push(obj) //在newData的最后添加一行新内容（一个空的对象；其属性名设置与上面的data数据中的一个对象相同，就是无属性值），
        $("tbody").append(str) //将新增的str添加到tbody的后面，在浏览器上显示，承接newData的最后一条空对象；之后“改”这个过程就可以监控到新增的input,便可进行本地存储的更改
    })



}