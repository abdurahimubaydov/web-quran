import axios from "axios";

const SurahDetailService = {
    async getChapterDetail(id) {
        const {data} = await axios.get(`https://api.quran.com/api/v4/chapters/${id}?language=en`)
        return data
    },
    async getChapterInfo(id) {
        const {data} = await axios.get(`https://api.quran.com/api/v4/chapters/${id}/info?language=en`)
        return data
    },
    async getChapter(id, per_page) {
        // per page its count of 
        const {data} = await axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=en&words=true&page=1&per_page=${per_page}`)
        return data
    }
}


// 

export default SurahDetailService