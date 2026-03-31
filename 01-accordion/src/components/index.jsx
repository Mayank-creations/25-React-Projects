export default function Header({ id, title, content }) {
    return (
        <div className="header">
            <div className='title'>{title}</div>
            <div>{content}</div>
        </div>
    );
}