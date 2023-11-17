import head1 from '../../assets/Rectangle 20078.png';
import head2 from '../../assets/Rectangle 10.png';
const Services = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='flex items-center gap-8'>
                <img className='w-[500px]' src={head1} alt="" />
                <div className='space-y-9'>
                    <h2 className="text-4xl font-semibold">Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <img src={head2} alt="" />
                    <h3 className="text-4xl font-semibold">Electro  Gastrology Therapy</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='btn btn-primary'>MORE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default Services;