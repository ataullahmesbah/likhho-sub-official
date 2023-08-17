import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Spin, Upload } from 'antd';
import banner from '../../pages/images/banner/banner2.jpg';
import wordIcon from '../../pages/images/banner/word_icon.png';

import styled, { css } from 'styled-components';

const rotatingAnimation = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const RotatingImage = styled.img`
  ${rotatingAnimation}
  animation: rotate 4s linear infinite;
  border-radius: 10%;
`;

const Drag = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800">
    {/* Banner Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center  lg:pt-20 h-[730px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-blue-800 opacity-80 z-0"
        style={{
          height: '70vh',
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-3 lg:space-y-28">
        <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-16 sm:items-start sm:justify-start lg:mt-1 lg:space-x-48 mt-40 sm:mt-28">
          {/* ... Your content ... */}


          <div className="text-center sm:text-left">
            <h6 className="text-3xl sm:text-5xl md:text-3xl md:px-10 text-white py-4 font-serif">
              Create a free LIKHO edit, PDF document
            </h6>
            <p className="text-3xl sm:text-5xl md:px-10 text-white py-4 font-mono">
              for Online Free.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-8">
            <p className="font-bold text-xl sm:text-3xl pt-5 mb-0 text-white text-center sm:text-left">
              Document simplified Likho.
            </p>
            <button className=" font-bold text-xl p-2 m-3  text-white rounded-lg btn-info font-sans">Explore Likho</button>
          </div>
        </div>

        <div className="lg:pb-1 pb-14 sm:pb-28">
          <div className="z-10 lg:w-[930px] bg-gray-200 p-4 rounded-lg mx-auto sm:w-[80%] md:w-[70%]">
            <Upload.Dragger
              action="http://localhost:5173/"
              listType="picture"
              accept=".jpg, .jpeg, .doc"
              beforeUpload={(file) => {
                console.log({ file });
                return false;
              }}
              defaultFileList={[
                {
                  uid: 'abc',
                  name: 'existing file.png',
                  status: 'uploading',
                  url: 'https://barcelona.com',
                  percent: 50,
                },
              ]}
              iconRender={() => {
                return <Spin />;
              }}
              progress={{
                strokeWidth: 3,
                strokeColor: {
                  '0%': '#f0f',
                  '100%': '#ff0',
                },
                style: { top: 12 },
              }}
            >
              <div className="flex justify-center items-center mb-4">
                <RotatingImage className="w-12 h-14" src={wordIcon} alt="" />
              </div>
              <h4 className="text-4xl font-bold text-center">
                Drag and drop document here to upload
              </h4>
              <br />
              <Button className="btn-primary mb-4" icon={<UploadOutlined />}>
                <span className="text-gray-800 font-semibold">
                  Click to Upload
                </span>
              </Button>
              <p className="text-gray-700 font-serif font-medium text-center">
                Upload documents of up to 31 MB in PDF, DOC, DOCX, RTF, PPT, PPTX, JPEG, PNG, or TXT
              </p>
            </Upload.Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drag;

