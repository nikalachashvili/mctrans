import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './../component/Common/Header/header.module'
import mainslider from './../component/MainSlider/mainslider.module'
import requestbox from './../component/RequestBox/requestbox.module'
import carditem from './../component/CardItem/carditem.module'
import footer from './../component/Common/Footer/footer.module'
import calculator from './../component/Calculator/calculator.module'
import vinsearch from './../component/VinSearch/vinsearch.module'
import loungecars from './../component/LoungeCars/loungecars.module'
import salemanager from './../component/SalesManagers/salesmanager.module'
import news from './../component/News/news.module'
import whyus from './../component/WhyUs/whyus.module'
import lastblog from './../component/LastBlog/lastblog.module'
import teams from './../component/Teams/teams.module'
import cars from './../component/Cars/cars.module'
import contact from './../component/Contact/contact.module'
import benefits from './../component/Benefits/benefits.module'
import askedquestions from './../component/AskedQuestions/askedquestions.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ka',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...mainslider.en,
                    ...requestbox.en,
                    ...carditem.en,
                    ...footer.en,
                    ...calculator.en,
                    ...vinsearch.en,
                    ...loungecars.en,
                    ...salemanager.en,
                    ...news.en,
                    ...whyus.en,
                    ...lastblog.en,
                    ...teams.en,
                    ...cars.en,
                    ...contact.en,
                    ...benefits.en,
                    ...askedquestions.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...mainslider.ka,
                    ...requestbox.ka,
                    ...carditem.ka,
                    ...footer.ka,
                    ...calculator.ka,
                    ...vinsearch.ka,
                    ...loungecars.ka,
                    ...salemanager.ka,
                    ...news.ka,
                    ...whyus.ka,
                    ...lastblog.ka,
                    ...teams.ka,
                    ...cars.ka,
                    ...contact.ka,
                    ...benefits.ka,
                    ...askedquestions.ka,
                }
            },
            ru: {
                translation: {
                    ...header.ru,
                    ...mainslider.ru,
                    ...requestbox.ru,
                    ...carditem.ru,
                    ...footer.ru,
                    ...calculator.ru,
                    ...vinsearch.ru,
                    ...loungecars.ru,
                    ...salemanager.ru,
                    ...news.ru,
                    ...whyus.ru,
                    ...lastblog.ru,
                    ...teams.ru,
                    ...cars.ru,
                    ...contact.ru,
                    ...benefits.ru,
                    ...askedquestions.ru,
                }
            }
        }
    })

export default i18n