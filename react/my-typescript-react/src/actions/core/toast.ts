
interface Toast {
    msg(msg: string): Promise<{}>;
    warning(msg: string): Promise<{}>;
    error(msg: string): Promise<{}>;
}
class ToastImp implements Toast {
    msg(msg: string): Promise<{}> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    warning(msg: string): Promise<{}> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    error(msg: string): Promise<{}> {
        alert(msg);
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
export default new ToastImp();