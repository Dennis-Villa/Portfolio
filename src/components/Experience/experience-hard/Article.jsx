import "./Article.scss"
import StylizedTitle from "/src/components/generic/StylizedTitle.jsx"
import {useUtils} from "/src/helpers/utils.js"
import PropTypes from 'prop-types';

function Article({ title, children, className }) {
    const utils = useUtils()

    return (
        <article className={`${className} w-100`}>
            {title && (
                <StylizedTitle text={utils.parseJsonText(title)} size={`default`} classList={`mb-3`}/>
            )}

            <div className={`article-content-wrapper mx-2 mx-md-3 text-4`}>
                {children}
            </div>
        </article>
    )
}

Article.propTypes = {

    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Article