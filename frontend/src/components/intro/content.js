import React from 'react';
import './content.css';
import Single from './single';

import '../../utills/i18next';
import { useTranslation } from "react-i18next";

function Content() {
    const {t} = useTranslation();
    return (
        <div className="content">
            <div className="content__heading">
                <h2>{t('contTit')}</h2>
            </div>
            <div className="content__single">
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/browse-portfolios-v2.svg"
                    title={t('contBP')}
                    content={t('contBPdesc')}
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/view-bids-v2.svg"
                    title={t('contVB')}
                    content={t('contVBdesc')}
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/live-chat-v2.svg"
                    title={t('contLC')}
                    content={t('contLCdesc')}
                />
            </div>
            <div className="content__single">
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/pay-v2.svg"
                    title={t('contPFQ')}
                    content={t('contPFQdesc')}
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/track-progress-v2.svg"
                    title={t('contTP')}
                    content={t('contTPdesc')}
                />
                <Single
                    src="https://www.f-cdn.com/assets/main/en/assets/home/benefits/support-v2.svg"
                    title={t('cont24/7')}
                    content={t('cont24/7desc')}
                />
            </div>

        </div>
    )
}

export default Content
