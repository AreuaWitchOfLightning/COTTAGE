find . -not -name 'defaultconfigs' -not -name 'kubejs' -not -name 'ldlib' -not -name 'mods' -not -name 'resourcepacks' -not -name 'clearcashed.sh' -not -name 'icon.png' -not -name 'options.txt'  -maxdepth 1  | xargs rm -R  --
unzip /home/aleksandra/Downloads/CABIN-2.1.3-curseforge.zip 'overrides/config/*' -d "config"
mv config/overrides/config/* config
rm -R config/overrides