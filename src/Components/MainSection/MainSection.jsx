import './MainSection.css';

const MainSection = () => {
    return (
        <main className='main-container'>
            <div className='main-img-box'>
                <img className='main-img' src="https://images.unsplash.com/photo-1630835425197-50feeba99ecd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="main-content-box">
                <h2 className='main-head'>Think Health. Think Massage.</h2>
                <p className="main-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo inventore facere voluptates corrupti mollitia ducimus, eligendi ratione expedita. Nostrum a odit magni tempore quam quo velit voluptatibus, officiis rerum. Fuga.</p>
                <div className="main-btn-box">
                    <button className="main-btn">LEARN MORE ABOUT US</button>
                    <button className="main-btn">CONTACT US TODAY</button>
                </div>
            </div>
        </main>
    );
}

export default MainSection;
