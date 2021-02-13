import React, { Fragment } from 'react';
import AdjacentElements from './AdjacentElements/AdjacentElements';
import ClassNameRestriction from './ClassNameRestriction/ClassNameRestriction';
import EmbedExpressions from './EmbedExpressions/EmbedExpressions';

const JsxDemo = props => {
    return (
        <Fragment>
            <ClassNameRestriction />
            <AdjacentElements />
            <EmbedExpressions />
        </Fragment>
    );
}

export default JsxDemo;