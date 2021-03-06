import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import MobileNavBar from '../../components/MobileNavBar';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (!uploadedFiles.length) return;

    data.append('file', uploadedFiles[0].file, uploadedFiles[0].name);

    await api
      .post('/transactions/import', data)
      .then(function (response) {
        toast.success('✔ Arquivo importado com sucesso');
        history.push('/dashboard');
      })
      .catch(function (error) {
        const { message } = error.response.data;
        toast.error(`🔥 ${message}`);
      });
  }

  function submitFile(files: File[]): void {
    const csvFile = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles(csvFile);
  }

  return (
    <>
      <Header size="small" />
      <MobileNavBar />

      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
