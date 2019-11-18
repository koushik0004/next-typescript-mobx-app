FROM node:12-alpine as nexttsmobx


# RUN apk add --update --no-cache python
# RUN apk update \
#     && apk add --virtual build-dependencies \
#         build-base \
#         gcc \
#         wget \
#         git

RUN mkdir -p /www/app
RUN chmod 777 -R /www/app
WORKDIR /www/app

COPY . .

RUN yarn global add now
RUN yarn install  

EXPOSE 4000

CMD ["yarn", "dev"]

# docker build -t xt/nexttsmobx .
# docker run -it -d -p 4000:4000 --name nexttsmobx -v $(pwd):/www/app xt/nexttsmobx
# docker container rm nexttsmobx -f