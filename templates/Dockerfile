FROM node:alpine

# Install deplendencies in a separate layer
ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn install
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app/

# Build the app
WORKDIR /usr/app
ADD . /usr/app
RUN yarn build && \
    rm -rf src/ && \
    rm -rf test/

# Remove dev dependencies
RUN yarn install --production

CMD yarn test
