import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) => {

  const navigate = useNavigate()

  return (
    <div 
      className='flex flex-col w-[250px] p-4 bg-white bg-opacity-30 backdrop-blur-sm animate-sliding rounded-lg cursor-pointer'
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img 
        alt='artist' 
        src={track?.images?.coverart}
        className='w-full h-56 rounded-lg'
      />
      <p className='mt-4 font-semibold text-lg text-white truncate'>{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
