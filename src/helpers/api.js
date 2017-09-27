
import Axios from 'axios';

const MOCK_NOTES_URL = 'mock-notes.json'
export default {
  getNotes() {
    return Axios.get(MOCK_NOTES_URL);
  },
};
