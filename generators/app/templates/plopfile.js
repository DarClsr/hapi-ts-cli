module.exports = (plop) => {
    plop.setGenerator('module', {
        description: 'this is a module file ',
        prompts: [
            {
                type: 'input',
                name: 'fileName',
                message: '创建一个模块文件'
            }
        ],
        actions: (data)=>{
            const fileName=data.fileName;
            const routerName=fileName[0].toUpperCase()+fileName.substr(1,fileName.length);
            const actions=[
                {
                    type: 'add',
                    path: `src/modules/${fileName}/${fileName}.router.ts`,
                    templateFile: 'plop_templates/module/router.hbs',
                    data:{
                        routerName,
                        fileName,
                    }
                },
                {
                    type: 'add',
                    path: `src/modules/${fileName}/${fileName}.service.ts`,
                    templateFile: 'plop_templates/module/service.hbs',
                    data:{
                        serviceName:routerName,
                    }
                }
            ]

            return actions;
        }
    });
}