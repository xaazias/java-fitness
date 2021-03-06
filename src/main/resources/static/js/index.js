const visits = document.getElementById("profile-visits")
const hours = document.getElementById("profile-hours")
const avgTime = document.getElementById("profile-avg-time")

const getAvgTime = () => {
    if (parseInt(hours.innerHTML) > 0 && parseInt(visits.innerHTML) > 0) {
        avgTime.innerHTML = `${Math.round(
            (parseInt(hours.innerHTML) * 60) / parseInt(visits.innerHTML)
        )} мин`
    }
    else {
        avgTime.innerHTML = `0 мин`
    }
}
getAvgTime()

const subscriptionStart = document.getElementById("profile-subscription-start")
const subscriptionEnd = document.getElementById("profile-subscription-end")
const subscriptionDays = document.getElementById("profile-subscription-days")

const getSubscriptionDays = () => {
    const startDate = new Date()

    const end = subscriptionEnd.innerHTML.split(".")
    const endDate = new Date(+end[2], end[1] - 1, +end[0])

    const days = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    )
    subscriptionDays.innerHTML = days < 0 ? `0 дней` : `${days} дней`
}
getSubscriptionDays()

const getSubscriptionPlan = () => {
    const plan = document.getElementById("profile-plan");

    if (subscriptionDays.innerHTML === "0 дней") {
        plan.innerHTML = "FREE"
    }
    else {
        if (plan.innerHTML === "...") plan.innerHTML = "PRO"
    }
}
getSubscriptionPlan()

const getComplexityScale = () => {
    const elements = Array.from(
        document.getElementsByClassName("program-complexity-scale")
    )

    elements.forEach((el) => {
        const scale = el.getAttribute("data-scale")
        const children = Array.from(el.children)

        children.map((child, index) => {
            if (index < parseInt(scale))
                child.className =
                    "program-complexity-scale__item program-complexity-scale__item_active"
            return child
        })
    })
}
getComplexityScale()