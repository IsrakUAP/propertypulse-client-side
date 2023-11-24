
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <AwesomeSlider className=' h-[60vh]'>
    <div><img src="https://images.ctfassets.net/0gqf8nju6pz6/3w36aYvCCihRoxvfhd5c32/dd185cb2b5bb97153c6feed640262693/real-estate-asset-classes-hero.jpeg" alt="" /></div>
    <div><img className=' max-w-full' src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
    <div><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
  </AwesomeSlider>
  );
};

export default Banner;