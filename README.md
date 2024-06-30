# Readme

### Deploying locally

#### Install Ruby with bundler

Described here: https://jekyllrb.com/docs/installation/.

On Debian/Ubuntu the steps are:

    sudo apt-get install ruby-full build-essential zlib1g-dev
    echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
    echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
    echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    gem install bundler # will install in $HOME/gems

This has been tested succesfully in early 2024 on Ubuntu 22.04 LTS with APT installing ruby 3.0.2p107 (2021-07-07).

#### Clone, install  and serve

    git clone git@github.com:velle/osaawebsite.git
    cd osaawebsite
    bundle install
    bundle exec jekyll serve

#### Docker test server on linux

    docker run \
    --entrypoint sh -c "chown -R jekyll /usr/gem/ && jekyll serve" \
    -p 4000:4000 \
    -v $PWD:/srv/jekyll \
    --env site_name=osaawebsite \
    --name osaawebsite \
    --pull missing -i false \
    jekyll/jekyll 

Connect to http://localhost:4000/ to view the site.
The jekyll server will automatically rebuild the site, when md / html files are updated.
If the config in _config.yml is changed, the container need to be restarted.

#### Docker setup on windows

    docker run \
    --entrypoint sh -c "chown -R jekyll /usr/gem/ && jekyll serve" \
    -p 4000:4000 \
    -v %CD%:/srv/jekyll \
    --env site_name=osaawebsite \
    --env MSYS_NO_PATCHCONV=1 \
    --name osaawebsite \
    --pull missing -i false \
    jekyll/jekyll 

Connect to http://localhost:4000/ to view the site.
The jekyll server will automatically rebuild the site, when md / html files are updated.
If the config in _config.yml is changed, the container need to be restarted.
