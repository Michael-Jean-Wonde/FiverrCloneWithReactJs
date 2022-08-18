import React from 'react';
import './features.css';
import Feature from './feature';

import '../../utills/i18next';
import { useTranslation } from "react-i18next";

function Features() {
    const {t} = useTranslation();
    return (
        <div className="features">
            <div className="features__heading">
                <h1>{t('featsNSD')}?</h1>
            </div>
            <div className="features__single">
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/post-a-job-redesign.svg"
                    title={t('featPost')}
                    content={t('featPostDesc')}
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/choose-freelancers-redesign.svg"
                    title={t('featCF')}
                    content={t('featCFdesc')}
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/pay-safely-redesign.svg"
                    title={t('festPay')}
                    content={t('featPSdesc')}
                />
            </div>

        </div>
    )
}

export default Features
