import logo from '../youtube-2844504_1280.png';

import '../styles/Sidebar.css';

export default function Sidebar() {
    const array = ['홈 화면', '구독 중', '인기 급 상승', 'live show', '내가 관심 있는 분야', '찜 목록'];

    return (<>
        <div className="wrap">
            <img src={logo} alt="" className="logo" />
            <div className='width'></div>
            <div className='button-list'>
                {
                    array.map((item) => {
                        return <button className='item'>{item}</button>
                    })
                }
            </div>
            <div className='length'>
            </div>
        </div>
    </>);
}