
import {loadFile,loadPolicy,saveSummary} from "./services.js"
import { checkPages } from "./business-rules.js";



function createCounter(){
     let count = 0
     return function next(){
        return count= count +1
     }
}
const getNextExecutionId = createCounter();


export async function runWorkflow() {
    let executionId = getNextExecutionId()

    try {
        const results = await Promise.all(
            [
                loadFile(10),
                loadPolicy()
            ]
        );
        const fileId = results[0].id
        const quantityPages = results[0].pages;
        const maxPages = results[1].maxPages
        const label = "ready"

        const summary = {
            fileId: fileId,
            pages: quantityPages,
            label: label
        };

        if(checkPages(quantityPages, maxPages)) {
            return {
                executionId,
                status: "success",
                result: await saveSummary(summary)
            }
        } else {
            throw new Error("تعداد صفحه بیش از سقف");
        }
    } catch (e) {
        return {
            executionId,
            status: "error",
            message: e.message
        }
    }
}
