import './Home.css'

function Home() {
    return ( 
        <div className='home-container'>
            <div className='home-content' >
               <div className='img'>
               <img src="https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=0CD2CBE3D180F9A50528CED7D903CBDD82EB1B07DFF6DBD2" alt="pob" className='img-pob' />
               </div>
                <div className='home-text'>
                    <h1>pobphon Jitsopha</h1>
                    <p>คณะ เทคโนโลยีสารสนเทศ สาขาวิชา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ หลักสูตรตรีเช้า (Software Full Stack Development)</p>
                </div>
            </div>
        </div>
     );
}

export default Home;