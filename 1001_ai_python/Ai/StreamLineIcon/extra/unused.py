email_input = wait.until(ec.visibility_of_element_located((By.ID, "sign-up_email")))
email_input.send_keys('gr.ego.rym.j.e.nson.5@gmail.com')

password_input = wait.until(ec.visibility_of_element_located((By.ID, "sign-up_password")))
password_input.send_keys('123456')

signupBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[2]/div/div/div/div[2]/div/div/section/div[1]/form/div/div[4]/div/div/div/div/button')))
signupBtn.click()


# unused-------

# used---------
# za.rae.ll.i.s3.3@gmail.com
# x.y.lina.r.nai.zzz@gmail.com
# gr.ego.rym.j.e.nson.5@gmail.com
# ar.un.az.e.le.s.tar.e@gmail.com