import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen w-9/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg" />
                    <img src={parts} className="w-1/2 absolute right-4 top-1/2 border-8 border-white rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-orange-600 font-bold text-xl'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-600 border-none mt-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;