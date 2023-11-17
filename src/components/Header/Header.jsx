import head1 from '../../assets/Rectangle 20078.png';
const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={head1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className="btn btn-primary">All Services</button>
                </div>
            </div>
        </div>
    );
};

export default Header;