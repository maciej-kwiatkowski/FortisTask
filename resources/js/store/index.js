import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        questions: [
            {
                text: 'Jaka jest Twoja płeć?',
                type: 'radio',
                options: ['Mężczyzna', 'Kobieta'],
                id: 'gender',
                answer: '',
                isVisible: true
            },
            {
                text: 'Jak często czytasz książki?',
                type: 'select',
                options: ['Codziennie', 'Kilka razy w tygodniu', 'Raz w tygodniu', 'Kilka razy w miesiącu', 'Rzadko'],
                answer: '',
                isVisible: false
            },
            {
                text: 'Jakie gatunki książek preferujesz?',
                type: 'checkbox',
                options: ['Literatura piękna', 'Kryminał', 'Fantastyka', 'Biografie', 'Inne'],
                answer: [],
                isVisible: false
            },
            {
                text: 'Podaj tytuł książki, która ostatnio Cię zaintrygowała',
                id: 'bookTitle',
                type: 'text',
                answer: '',
                errorMessage: 'To pole jest wymagane.',
                isVisible: false
            },
            {
                text: 'Opisz co Cię w niej urzekło',
                id: 'bookDescription',
                type: 'textarea',
                answer: '',
                isVisible: false
            },
            {
                text: 'Oceń swoje zaangażowanie w czytanie od 1 do 5',
                type: 'rating',
                id: 'firstRating',
                subquestions: [
                    { text: 'Czytam tylko wakacyjnie', answer: 0 },
                    { text: 'Czytam okazjonalnie wieczorami', answer: 0 },
                    { text: 'Czytam regularnie każdego dnia', answer: 0 },
                ],
                isVisible: false,
            },
            {
                text: 'Oceń swoje zainteresowanie literaturą od 1 do 5',
                type: 'rating',
                id: 'secondRating',
                subquestions: [
                    { text: 'Książki to dla mnie jedno z wielu zainteresowań', answer: 0 },
                    { text: 'Lubię czytać, ale nie jest to moje główne hobby', answer: 0 },
                    { text: 'Jestem pasjonatem literatury', answer: 0 },
                ],
                isVisible: false,
            },
        ],
        surveys: [],
        saved: false,
    },
    mutations: {
        setSaved(state, value) {
            state.saved = value;
        },
        setSurveys(state, surveys) {
            state.surveys = surveys;

            console.log('koelel', state.surveys)
        }
    },
    actions: {
        async saveSurvey({ commit }, questionData) {
            console.log(questionData);
            try {
                const response = await axios.post('/api/send-survey', questionData);

                if (response.status === 201) {
                    commit('setSaved', true);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async fetchSurveys({ commit }) {
            try {
                const response = await axios.get('/api/get-surveys');
                const surveys = response.data;
                console.log('res', surveys)
                commit('setSurveys', surveys);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
});