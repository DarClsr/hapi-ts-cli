
const Generator=require("yeoman-generator");

module.exports= class extends Generator{
    prompting(){
        // part 03 接受用户输入
        // yeoman 在询问用户环节 会自动调用此方法
        // 在此方法中可以调用父类的prompt() 方法发出对用户的命令行询问

        return this.prompt({
            name:"name",
            message:"your project name",
            type:"input",
            default:this.appname

        }).then(answers=>{
            this.answers=answers;
        })


    }
    writing(){
        // yeoman 自动生成文件阶段调用此方法
        // part01
        // this.fs.write(
        //     this.destinationPath("course.txt"),
        //     "webpack course cli"
        // )

        // part 02  根据模板创建文件
        // 获取模板文件路径
        //   const templatePath=this.templatePath("foo.txt");

        //   设置输出路径
        // const output=this.destinationPath("foo.txt");
        // // 设置输出内容
        // let content={title:"custom tempalte",success:true,answer:JSON.stringify(this.answers)}
        // // 将用户的答案输出到模板当中
        // this.fs.copyTpl(templatePath,output,content)

        const templatesPaths=require("./config");

        templatesPaths.forEach((item)=>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })

    }
}