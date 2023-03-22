import React from "react";
import { useEffect, useRef } from "react";
import { sendImppression } from "../../services/api-service";

interface IItemObserverProps {
    children: React.ReactNode
    onFeedItemsToShow?: () => void
    isLast?: boolean
}



function ObservedItem({ children, onFeedItemsToShow, isLast }: IItemObserverProps) {
    const ref = useRef<HTMLDivElement>(null)

    function handleLastItemDisplay(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
        const entry = entries[0];
        if (React.isValidElement(children) && entry.isIntersecting) {

            if (onFeedItemsToShow && isLast) onFeedItemsToShow()

            const { id, userId } = children.props.feedItem
            sendImppression(userId, id)

        }
    }

    useEffect(() => {

        const feedEl = ref.current

        const feedObserver = new IntersectionObserver(handleLastItemDisplay, {
            threshold: 1
        })

        if (feedEl) feedObserver.observe(feedEl)

        return () => {
            if (feedEl) feedObserver.unobserve(feedEl)
        }
    }, [])

    return <div ref={ref}>{children}</div>
}

export default ObservedItem