


import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Spin, Upload } from 'antd';
// const props = {
//     name: 'file',
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
// };

const Drag = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl pt-5 mb-0'>Upload here your file to edit</h1>
            <div
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    listType: 'picture',
                    height: '100vh'
                }}
                className=''
            >

                <Upload.Dragger
                    action='http://localhost:5173/' style={{ width: '500px' }}
                    listType="picture"
                    accept='.jpg, .jpeg, .doc'
                    beforeUpload={(file)=>{
                        console.log({file})
                        return false
                    }}

                    defaultFileList={[
                        {
                            uid:'abc',
                            name:'existing file.png',
                            status:'uploading',
                            url:"https://www.google.com/",
                            percent:50
                        }
                    ]}

                    iconRender={()=>{
                        return <Spin></Spin>
                    }}

                    progress={{
                        strokeWidth:3,
                        strokeColor:{
                            "0%":"#f0f",
                            "100%":"#ff0"
                        },

                        style:{top:12},
                    }}
                >
                    <Button>Drag & Drop the file</Button>
                    <br />

                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload.Dragger>
            </div>
        </div>
    );
};

export default Drag;