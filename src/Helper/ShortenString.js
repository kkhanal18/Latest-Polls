export default function shortenString(pollster) {
    if (pollster.length > 20) {
        return (pollster.split(" ").slice(0, 2).join(" "))
    }

    return (pollster)
}
