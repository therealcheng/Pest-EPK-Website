import '../styles/Spotify.css';
import Card from './MusicCard';

const MusicSpotify = () => {
  const link =
    'https://open.spotify.com/embed/album/2VLrlocedHBeqnmACWJjgf?utm_source=generator';
  return (
    <div className='lg:flex lg:justify-center'>
      <div className='lg:hidden'>
        <Card />
      </div>
      <iframe
        frameBorder='0px'
        title='Spotify'
        width='100%'
        height='380'
        src={link}
        loading='lazy'
      ></iframe>
      <div className='hidden lg:block'>
        <Card />
      </div>
    </div>
  );
};

export default MusicSpotify;
