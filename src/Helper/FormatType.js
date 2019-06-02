export default function formatType(type) {
    if (type === "president-primary-d") {
        return ("Democratic Primary")
    }

    if (type === "president-primary-r") {
        return ("Republican Primary")
    }

    else if (type === "trump-approval") {
        return ("Trump Approval Rating")
    }

    else if (type === "generic-ballot") {
        return ("Generic Ballot")
    }

    else if (type === "president-general") {
        return ("President General")
    }
    return (type)

}
