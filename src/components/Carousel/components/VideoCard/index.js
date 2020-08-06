import React from 'react';
import { VideoCardContainer } from './styles';
import { useHistory } from 'react-router-dom'
import json from '../../../../data/watch.json'; 

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

// Função que abra a página do YouTube
// function VideoCard({ videoTitle, videoURL, categoryColor }) {
//   const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
//   return (
//     <VideoCardContainer
//       url={image}
//       href={videoURL}
//       target="_blank"
//       style={{ borderColor: categoryColor || 'red' }}
//       title={videoTitle}
//     />
//   );
// }

// Função que faz a exibição nativa dos vídeos
function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  // videoId é gerada usando o método .substr() na string com a URL do vídeo, extraindo apenas o ID dele.
  const videoId = videoURL.substr(32,42);
  
  // history como função useHistory() para roteamento através do link
  const history = useHistory();
  
  // função navigateTo() que será invocada quando o card do vídeo for clicado (na propriedade onClick de 'VideoCardContainer')
  const navigateTo = () => {
    json.id = videoId;
    history.push('/Watch') // Redirecionamento de rota para o componente Watch através da useHistory();
  };

  return (
    <VideoCardContainer
      url={image}
      onClick={navigateTo}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
    </VideoCardContainer>
  );
}

export default VideoCard;