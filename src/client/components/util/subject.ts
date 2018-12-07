
export type SubjectSubscriber<T> = (payload?: T) => void
export type SubjectSubscription = () => void

class Subject<T> {
    private subscribers: Array<SubjectSubscriber<T>> = []

    next(payload?: T) {
        this.subscribers.forEach(cb => cb(payload))
    }

    subscribe(callback: SubjectSubscriber<T>): SubjectSubscription {
        this.subscribers.push(callback)
        return () => this.unsubscribe(callback)
    }

    private unsubscribe(callback: SubjectSubscriber<T>): void {
        const i = this.subscribers.indexOf(callback)
        if (i >= 0) this.subscribers.splice(i, 1)
    }
}

export default Subject