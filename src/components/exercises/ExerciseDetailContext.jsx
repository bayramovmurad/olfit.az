import bodyPartImg from '../../../assets/icons/body-part.svg';
import targetImg from '../../../assets/icons/target.svg';
import equipmentImg from '../../../assets/icons/equipment.svg';

const ExerciseDetailContext = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetails;


  const extraDetail = [
    {
      icon: bodyPartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipmentImg,
      name: equipment,
    }
  ]

  return (

    <div className="flex items-center justify-between max-w-[1200px] mx-auto h-screen">
      <div>
        <img className="min-w-[500px]" src={gifUrl} alt={name} />
      </div>
      <div className="max-w-[600px]">
        <h2 className="uppercase font-bold my-2">{name}</h2>
        <h3 className="my-4"> Bu <span className="text-red-500">{target}</span> hədəfinizi təyin etmək üçün ən yaxşı məşqlərdən biridir. <br /> Bu,{' '} bacarıqlarını təkmilləşdirməyə kömək edəcək ve sene
          əhval-ruhiyyə və enerji qazandıracaq.</h3>
        <p className=" font-normal">{instructions}</p>
        <div className='flex gap-x-4 mt-6'>
          {
            extraDetail.map((item) =>
              <div className='bg-green-500 w-24 h-24 text-white rounded-lg flex items-center justify-center flex-col gap-y-2' key={item}>
                <img src={item.icon} alt={item.name} />
                <span className='text-xs'>{item.name}</span>
              </div>
            )
          }
        </div>
      </div>

    </div>


  )
}
export default ExerciseDetailContext