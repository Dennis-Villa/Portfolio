
import PropTypes from 'prop-types';

function StylizedTitle({text, classList}) {
    const classes = {tag: 'h4', lineTag: 'eq-h3'}
    const HeadingTag = classes.tag

    return (
        <HeadingTag className={`stylized-title d-flex align-items-center fw-bold ` + classList}>
            <span className={`text-highlight ${classes.lineTag} ms-1 me-2 pe-1`}>|</span>
            <span className={`mb-0`} dangerouslySetInnerHTML={{__html: text}}/>
        </HeadingTag>
    )
}

StylizedTitle.propTypes = {

    text: PropTypes.string.isRequired,
    classList: PropTypes.string,
};

export default StylizedTitle