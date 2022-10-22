const path =require('path');
const fs = require('fs');
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}
function orgainze(srcPath) {
    //1) To check if srcpath is present or not
    if(srcPath==undefined)
    {
        // console.log(srcPath);
        srcPath=process.cwd();
        // console.log(srcPath);
    }
    else console.log(srcPath);

    //2)to creste a direactory in the name of orgnised files

    let organizedFiles = path.join(srcPath,"organized_Files");
    console.log("organized files folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles)==false)
    {
        //if folder don,t exist then make a folder else don,t make a folder
        fs.mkdirSync(organizedFiles);
        
    }
    else
    {
        console.log("folder already exist");
    }

    // 3) scan the whole src folder in this case and 
    

    let all_files = fs.readdirSync(srcPath);
    // it will basically read the name of all files in the directory created
    // console.log(all_files);

    //4)traverse over all the files and classify them on the basic of their extension(.pdf,.mp3)

    for(let i=0;i<all_files.length;i++)
    {
    //    let ext =all_files[i].split(".")[1];
    //    console.log(ext);
       let fullPathOfFile = path.join(srcPath, all_files[i]);
       //lstatsync give the information about regarding the link provided 

       let isFile = fs.lstatSync(fullPathOfFile).isFile();//return true or false 
       if(isFile)
       {
        //get extension name from
        let ext =all_files[i].split(".")[1];
        let folderName =getFolderName(ext);
        // console.log(folderName);
        copyFiletoDest(srcPath,fullPathOfFile,folderName);//copy the files to the folder
        }
    
    
    function getFolderName(ext){

        for(let key in types)
        {
            for(let i =0;i<types[key].length;i++){
                if(types[key][i]==ext)
                {
                    return key;
                }
            }
        }




    }
    function copyFiletoDest(srcPath, fullPathOfFile,folderName){
        //folder name ka path 
        let destiFolder = path.join(srcPath, "organized_files" ,folderName);
        if(!fs.existsSync(destiFolder))
        {
            fs.mkdirSync(destiFolder)
        }
        //copy files
        let fileName = path.basename(fullPathOfFile);
        
        let destiFilename= path.join(destiFolder,fileName);

        fs.copyFileSync(fullPathOfFile, destiFilename);


    }

     


    }





    




}

    let path_2 ="/Users/mohitkumar/Desktop/web-dev++/file orgainiser/downloads";
    orgainze(path_2);
