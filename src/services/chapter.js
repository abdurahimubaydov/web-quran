import axios from "axios";

const ChapterService = {
    async getChapterSuccess() {
        const {data} = await axios.get('https://api.quran.com/api/v4/chapters?language=en')
        return data
    }
}


export default ChapterService
