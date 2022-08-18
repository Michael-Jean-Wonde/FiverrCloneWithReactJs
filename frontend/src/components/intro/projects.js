import React from 'react';
import './projects.css';
import Project from './project';

import '../../utills/i18next';
import { useTranslation } from "react-i18next";

function Projects() {
    const {t} = useTranslation();
    return (
        <div className="projects">
            <div className="projects__heading">
                <h3>{t('ProjCFav')} <br />
                {t('projSome')}:</h3>
            </div>
            <div className="projects__project">
                <Project
                    src="https://image.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg"
                    title={t('proj1')}
                    price={t('proj1desc')}
                />
                <Project
                    src="https://image.freepik.com/free-photo/image-creative-graphic-designer-working-color-selection-drawing-graphics-tablet_28283-898.jpg"
                    title={t('proj2')}
                    price={t('proj1desc')}
                />
                <Project
                    src="https://image.freepik.com/free-vector/lovely-floral-ornamental-logos-collection-design-set_1017-25867.jpg"
                    title={t('proj3')}
                    price={t('proj1desc')}
                />
            </div>
            <div className="projects__project">
                <Project
                    src="https://image.freepik.com/free-photo/marketing-strategy-connting-digital-devices-concept_53876-23053.jpg"
                    title={t('proj4')}
                    price={t('proj1desc')}
                />
                <Project
                    src="https://image.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg"
                    title={t('proj5')}
                    price={t('proj1desc')}
                />
                <Project
                    src="https://image.freepik.com/free-vector/goals-habits-tracking-app-collection_23-2148669655.jpg"
                    title={t('proj6')}
                    price={t('proj1desc')}
                />
            </div>
            <div className="projects__more">
                <button>{t('projSM')}</button>
            </div>

        </div>
    )
}

export default Projects
