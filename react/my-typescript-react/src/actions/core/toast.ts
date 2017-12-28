
interface IToast {
    msg(msg: string): Promise<any>
    warning(msg: string): Promise<any>
    error(msg: string): Promise<any>
}
class toast implements IToast {
    msg(msg: string): Promise<any> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        })
    }
    warning(msg: string): Promise<any> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        })
    }
    error(msg: string): Promise<any> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        })
    }
}
export default new toast();