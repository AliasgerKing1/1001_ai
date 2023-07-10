def nav_text_conditions(pages_num, typeWeb):
    nav_text = []
    if (typeWeb == "ecommerce"):
        if (pages_num == 2):
            nav_text = ["home", "shop"]
        elif (pages_num == 3):
            nav_text = ["home", "shop", "blog"]
    elif (typeWeb == "social"):
        if (pages_num == 2):
            nav_text = ["home", "feed"]
        elif (pages_num == 3):
            nav_text = ["home", "feed", "search"]

    elif (typeWeb == "blog"):
        if (pages_num == 2):
            nav_text = ["home", "attachments"]
        elif (pages_num == 3):
            nav_text = ["home", "attachments", "about"]

    elif (typeWeb == "health"):
        if (pages_num == 2):
            nav_text = ["home", "consultancy"]
        elif (pages_num == 3):
            nav_text = ["home", "consultancy", "list"]

    elif (typeWeb == "finance"):
        if (pages_num == 2):
            nav_text = ["home", "financial paln"]
        elif (pages_num == 3):
            nav_text = ["home", "financial paln", "cources"]

    elif (typeWeb == "art"):
        if (pages_num == 2):
            nav_text = ["home", "showcase"]
        elif (pages_num == 3):
            nav_text = ["home", "showcase", "ai generation"]
    return nav_text
