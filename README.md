#Use
1、根目录 npm install 
2、cli 运行uniapp编译各端

# Object Catalog
boot 扩展封装js  
common  css样式封装  
components   自定义组件（初始封装了图标组件）  
i18n  语言文件  
layouts   主动载入公共组件  
pages  页面  
static 静态资源（图片、视频、字体文件）  
store  vuex相关（逻辑都在这个下面写）  
uview   UI框架  


#编写要求
1、所有的逻辑代码均在store里面  
2、不能修改uview框架代码  
3、不能有";"符号存在  
4、复用代码需要抽离为自定义组件  


#后续安排
1、封装统一页面载入组件（内涵网络监听、错误提示、版本升级等） 
2、增加一些自定义组件
