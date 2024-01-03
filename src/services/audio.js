import axios from "axios";

const AudioSerVice = {
    async getSingChapter(id) {
        const {data} = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/7/${id}`)
        return data
    },
    async getNextSingleChapter(id) {
        const {data} = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/7/${id + 1 === 115 ? '' : id + 1}`)
        return data
    },
    async getBeforeSingleChapter(id) {
        const {data} = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/7/${id - 1 === 0 ? '' : id - 1}`)
        return data
    },
}

export default AudioSerVice