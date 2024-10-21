export const AccordionItem = ({ title, content, isOpen, onClick }: Props) => (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
        <button className="accordion-title" onClick={onClick}>
            {title}
            <span className="icono">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && <div className="accordion-content">{content}</div>}
    </div>
);

type Props = {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}
