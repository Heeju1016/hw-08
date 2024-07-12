import '../styles/Research.css';

export default function Research() {
    return(
    <form>
        <div className="research">
                <input placeholder="검색어를 입력해 주세요." className="input-text"/>
                <button className='research-button'>검색</button>
        </div>
    </form>
    );
}