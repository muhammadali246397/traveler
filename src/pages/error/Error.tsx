import Container from '@/lib/Container';
import bg from '../../assets/error2.jpg'
import error1 from '../../assets/error1.png'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Error = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Container>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='text-9xl font-bold'>404</h1>
                            <h2 className='text-6xl font-bold'>OOPS!</h2>
                            <h3 className='text-4xl mb-5 font-bold text-blue-500'>Page Not Found</h3>
                            <Link  to='/'><Button>Back To Home</Button></Link>
                        </div>
                    </div>
                    <div>
                        <img src={error1} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Error;